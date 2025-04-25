import React from 'react';
import './Ticket.scss';

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">13 400 P</div>
        <img className="ticket__logo" src="//pics.avs.io/99/36/S7.png" alt="S7 Airlines" />
      </div>

      <div className="ticket__info">
        <div className="ticket__segment">
          <div className="ticket__route">
            <span className="ticket__title">MOW – HKT</span>
            <span className="ticket__value">10:45 – 08:00</span>
          </div>
          <div className="ticket__duration">
            <span className="ticket__title">В пути</span>
            <span className="ticket__value">21ч 15м</span>
          </div>
          <div className="ticket__stops">
            <span className="ticket__title">2 пересадки</span>
            <span className="ticket__value">HKG, JNB</span>
          </div>
        </div>

        <div className="ticket__segment">
          <div className="ticket__route">
            <span className="ticket__title">HKT – MOW</span>
            <span className="ticket__value">11:20 – 00:50</span>
          </div>
          <div className="ticket__duration">
            <span className="ticket__title">В пути</span>
            <span className="ticket__value">13ч 30м</span>
          </div>
          <div className="ticket__stops">
            <span className="ticket__title">1 пересадка</span>
            <span className="ticket__value">HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
