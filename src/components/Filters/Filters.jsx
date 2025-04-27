import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllFilters, toggleFilter } from '../../store/slices/filtersSlice';
import './Filters.scss';

const Filters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <div className="filters__filter">КОЛИЧЕСТВО ПЕРЕСАДОК</div>

      <label className="filters__option">
        <input
          type="checkbox"
          className="filters__checkbox"
          checked={filters.all}
          onChange={() => dispatch(setAllFilters(!filters.all))}
        />
        <span className="filters__label">Все</span>
      </label>

      <label className="filters__option">
        <input
          type="checkbox"
          className="filters__checkbox"
          checked={filters.noTransfers}
          onChange={() => dispatch(toggleFilter('noTransfers'))}
        />
        <span className="filters__label">Без пересадок</span>
      </label>

      <label className="filters__option">
        <input
          type="checkbox"
          className="filters__checkbox"
          checked={filters.oneTransfer}
          onChange={() => dispatch(toggleFilter('oneTransfer'))}
        />
        <span className="filters__label">1 пересадка</span>
      </label>

      <label className="filters__option">
        <input
          type="checkbox"
          className="filters__checkbox"
          checked={filters.twoTransfers}
          onChange={() => dispatch(toggleFilter('twoTransfers'))}
        />
        <span className="filters__label">2 пересадки</span>
      </label>

      <label className="filters__option">
        <input
          type="checkbox"
          className="filters__checkbox"
          checked={filters.threeTransfers}
          onChange={() => dispatch(toggleFilter('threeTransfers'))}
        />
        <span className="filters__label">3 пересадки</span>
      </label>
    </div>
  );
};

export default Filters;
