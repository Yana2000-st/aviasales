import React from 'react';
import './Filters.scss';

const Filters = () => {
  return (
    <div className="filters">
      <button className="filters__button">САМЫЙ ДЕШЕВЫЙ</button>
      <button className="filters__button">САМЫЙ БЫСТРЫЙ</button>
      <button className="filters__button">ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default Filters;
