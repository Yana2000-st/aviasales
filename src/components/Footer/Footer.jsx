import React from 'react';
import styles from './Footer.module.scss';
import { increaseVisibleCount } from '../../store/slices/ticketsSlice';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className={styles.showMore} onClick={() => dispatch(increaseVisibleCount())}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  );
};

export default Footer;
