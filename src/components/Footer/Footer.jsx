import React from 'react';
import styles from './Footer.module.scss';
import { increaseVisibleCount } from '../../store/slices/ticketsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTickets, selectVisibleCount, selectLoading } from '../../store/slices/selectors';

const Footer = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTickets);
  const visibleCount = useSelector(selectVisibleCount);
  const loading = useSelector(selectLoading);
  const hasMoreTickets = visibleCount < tickets.length;
  const visibleTickets = tickets.slice(0, visibleCount);

  return (
    <>
      {!loading && visibleTickets.length > 0 && hasMoreTickets && (
        <button className={styles.showMore} onClick={() => dispatch(increaseVisibleCount())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  );
};

export default Footer;
