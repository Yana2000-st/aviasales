import React from 'react';
import './Ticket.scss';
import { addMinutes, format } from 'date-fns';

//Шаблон с гитхаба
// {
//   "price": 13400, // Цена в рублях
//   "carrier": "S7", // Код авиакомпании
//   "segments": [ //  Массив перелётов
//     {
//       "origin": "MOW",  // Код города
//       "destination": "HKT", // Код города
//       "date": "2021-09-15T10:45:00.000Z",  // Дата и время вылета туда
//       "stops": ["HKG", "JNB"],  // Массив кодов (iata) городов с пересадками
//       "duration": 1275  // Общее время перелёта в минутах
//     },
//     {
//       "origin": "HKT", //  Код города
//       "destination": "MOW", //  Код города
//       "date": "2021-09-25T11:20:00.000Z", // Дата и время вылета обратно
//       "stops": ["HKG"], // Массив кодов (iata) городов с пересадками
//       "duration": 810 // Общее время перелёта в минутах
//     }
//   ]
// }

// Форматирую время в красивую строку
const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
};

// Текст для количества пересадок
const stopsText = (count) => {
  if (count === 0) return 'Без пересадок';
  if (count === 1) return '1 пересадка';
  if (count >= 2 && count <= 4) return `${count} пересадки`;
  return `${count} пересадок`;
};

// Форматирую время в красивое число
const formatTime = (dateString, duration) => {
  const start = new Date(dateString);
  const end = addMinutes(start, duration);
  const formatStart = format(start, 'HH:mm');
  const formatEnd = format(end, 'HH:mm');
  return `${formatStart} - ${formatEnd}`;
};

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{price} Р</div>
        <img className="ticket__logo" src={`//pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} Airlines`} />
      </div>

      <div className="ticket__info">
        {segments.map((segment, index) => (
          <div className="ticket__segment" key={index}>
            <div className="ticket__route">
              <span className="ticket__title">
                {segment.origin} – {segment.destination}
              </span>
              <span className="ticket__value">{formatTime(segment.date, segment.duration)}</span>
            </div>

            <div className="ticket__duration">
              <span className="ticket__title">В пути</span>
              <span className="ticket__value">{formatDuration(segment.duration)}</span>
            </div>

            <div className="ticket__stops">
              <span className="ticket__title">{stopsText(segment.stops.length)}</span>
              <span className="ticket__value">{segment.stops.join(', ') || '—'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
