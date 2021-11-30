import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ItemProvider } from '../../contexts/ItemContext';
import Header from '../Header';
import SearchBox from '../SearchBox';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <ItemProvider>
      <Router>
        <Header />
        <SearchBox />
        <Routes />
      </Router>
    </ItemProvider>
  );
}
