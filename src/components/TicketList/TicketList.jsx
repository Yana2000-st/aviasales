import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import Loader from '../Loader/Loader';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const error = useSelector((state) => state.tickets.error);
  const loading = useSelector((state) => state.tickets.loading);
  const filters = useSelector((state) => state.filters);
  const sort = useSelector((state) => state.sort.sort);
  const visibleCount = useSelector((state) => state.tickets.visibleCount);

  // Получаю список выбранных пересадок
  const selectedStops = [];
  if (filters.noTransfers) selectedStops.push(0);
  if (filters.oneTransfer) selectedStops.push(1);
  if (filters.twoTransfers) selectedStops.push(2);
  if (filters.threeTransfers) selectedStops.push(3);

  // Фильтрация по пересадкам
  const filteredTickets = tickets.filter((ticket) => {
    return ticket.segments.some((segment) => selectedStops.includes(segment.stops.length));
  });

  let sortedTickets = [...filteredTickets];

  if (sort === 'cheap') {
    sortedTickets.sort((a, b) => a.price - b.price);
  }

  if (sort === 'fast') {
    sortedTickets.sort((a, b) => {
      const aTime = a.segments[0].duration + a.segments[1].duration;
      const bTime = b.segments[0].duration + b.segments[1].duration;
      return aTime - bTime;
    });
  }

  if (sort === 'optimal') {
    sortedTickets.sort((a, b) => {
      const aTime = a.segments[0].duration + a.segments[1].duration;
      const bTime = b.segments[0].duration + b.segments[1].duration;
      const aScore = a.price + aTime;
      const bScore = b.price + bTime;
      return aScore - bScore;
    });
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div> Произошла ошибка: {error} </div>;
  }

  if (filteredTickets.length === 0) {
    return <div>Рейсов, подходящих под заданные фильтры, не найдено.</div>;
  }

  return (
    <>
      {sortedTickets.slice(0, visibleCount).map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </>
  );
};

export default TicketList;
