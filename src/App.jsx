import React from 'react';
import TicketList from './components/TicketList/TicketList';
import Footer from './components/Footer/Footer';
import Filters from './components/Filters/Filters';
import Sorting from './components/Sorting/Sorting';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content__wrapper}>
        <Sorting />
        <Filters />
        <TicketList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
