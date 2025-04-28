import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTickets } from './store/slices/ticketsSlice';
import TicketList from './components/TicketList/TicketList';
import Footer from './components/Footer/Footer';
import Filters from './components/Filters/Filters';
import Sorting from './components/Sorting/Sorting';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.content__wrapper}>
        <Filters />
        <Sorting />
        <TicketList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
