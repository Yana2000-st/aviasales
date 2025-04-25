import React from 'react';
import TicketList from './components/TicketList/TicketList';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import Filters from './components/Filters/Filters';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content__wrapper}>
        <Filters />
        <TicketList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
