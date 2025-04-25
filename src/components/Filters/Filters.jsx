import React from 'react';
import './Filters.scss';
import plane from '../../image/plane.svg';

const Filters = () => {
  return (
    <>
      <img className="filters__image" src={plane} alt="Логотип самолета" />
      <div className="filters">
        <button className="filters__button">САМЫЙ ДЕШЕВЫЙ</button>
        <button className="filters__button">САМЫЙ БЫСТРЫЙ</button>
        <button className="filters__button">ОПТИМАЛЬНЫЙ</button>
      </div>
    </>
  );
};

export default Filters;
