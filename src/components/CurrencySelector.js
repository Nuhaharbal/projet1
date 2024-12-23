import React from 'react';

const CurrencySelector = ({ selectedCurrency, onCurrencyChange, label }) => {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD']; // Liste d'exemples de devises

  return (
    <div>
      <label>{label}:</label>
      <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
