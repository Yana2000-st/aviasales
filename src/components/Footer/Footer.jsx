import React from 'react';
import './Footer.scss';
import { increaseVisibleCount } from '../../store/slices/ticketsSlice';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className="showMore" onClick={() => dispatch(increaseVisibleCount())}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  );
};

export default Footer;
