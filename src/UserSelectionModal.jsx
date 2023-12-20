// UserSelectionModal.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelectionModal = () => {
  const navigate = useNavigate();

  const handleUserSelection = (userType) => {
    if (userType === 'admin') {
      navigate('/admin');
    } else if (userType === 'customer') {
      navigate('/customer');
    }
  };

  return (
    <div>
      {/* Your modal content and user selection buttons */}
      <button onClick={() => handleUserSelection('admin')}>Admin</button>
      <button onClick={() => handleUserSelection('customer')}>Customer</button>
    </div>
  );
};

export default UserSelectionModal;
