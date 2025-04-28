import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const error = useSelector((state) => state.tickets.error);
  const loading = useSelector((state) => state.tickets.loading);

  if (loading) {
    return <div> Пожалуйста, подождите, идет загрузка билетов...</div>;
  }

  if (error) {
    return <div> Произошла ошибка: {error} </div>;
  }

  return (
    <>
      {tickets.slice(0, 5).map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </>
  );
};

export default TicketList;
