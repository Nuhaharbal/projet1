import React from 'react';

const CurrencyInput = ({ value, onAmountChange }) => {
  return (
    <div>
      <label>Montant à convertir: </label>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => onAmountChange(e.target.value)} 
      />
    </div>
  );
};

export default CurrencyInput;
