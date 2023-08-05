import React from 'react';
import './Alert.css';

const Alert = () => {
  return (
    <div className="alert">
      <p className="text-left font-bold">Item Added</p>
      <p className="text-sm text-left">Your Item has sucessfully added to cart</p>
    </div>
  );
};

export default Alert;
