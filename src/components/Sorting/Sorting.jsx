import React from 'react';
import './Sorting.scss';

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__filter">КОЛИЧЕСТВО ПЕРЕСАДОК</div>

      <label className="sorting__option">
        <input type="checkbox" className="sorting__checkbox" />
        <span className="sorting__label">Все</span>
      </label>

      <label className="sorting__option">
        <input type="checkbox" className="sorting__checkbox" />
        <span className="sorting__label">Без пересадок</span>
      </label>

      <label className="sorting__option">
        <input type="checkbox" className="sorting__checkbox" />
        <span className="sorting__label">1 пересадка</span>
      </label>

      <label className="sorting__option">
        <input type="checkbox" className="sorting__checkbox" />
        <span className="sorting__label">2 пересадки</span>
      </label>

      <label className="sorting__option">
        <input type="checkbox" className="sorting__checkbox" />
        <span className="sorting__label">3 пересадки</span>
      </label>
    </div>
  );
};

export default Sorting;
