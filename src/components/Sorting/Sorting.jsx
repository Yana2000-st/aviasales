import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../store/slices/sortSlice';
import './Sorting.scss';
import plane from '../../image/plane.svg';

const Sorting = () => {
  const dispatch = useDispatch();
  return (
    <>
      <img className="sorting__image" src={plane} alt="Логотип самолета" />
      <div className="sorting">
        <button className="sorting__button" onClick={() => dispatch(setSort('cheap'))}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button className="sorting__button" onClick={() => dispatch(setSort('fast'))}>
          САМЫЙ БЫСТРЫЙ
        </button>
        <button className="sorting__button" onClick={() => dispatch(setSort('optimal'))}>
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
    </>
  );
};

export default Sorting;
