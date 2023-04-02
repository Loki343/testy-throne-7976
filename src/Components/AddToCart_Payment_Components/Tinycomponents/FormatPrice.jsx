import React from 'react';

 const FormatPrice = ({price}) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'EUR',maximumSignificantDigits: 2 }).format(price);
}

export default FormatPrice
