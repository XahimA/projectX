// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelectionModal from './UserSelectionModal';
import AdminComponent from './AdminComponent';
import CustomerComponent from './CustomerComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSelectionModal />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/customer" element={<CustomerComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
