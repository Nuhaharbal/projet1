// src/components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import { getExchangeRate } from '../services/apiService'; // Importer la fonction API

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  // Fonction pour gérer la conversion des devises
  const convertCurrency = async () => {
    try {
      const rate = await getExchangeRate(fromCurrency, toCurrency);
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (err) {
      setError("Erreur lors de la conversion.");
    }
  };

  // Appel API déclenché à chaque modification de montant ou de devises
  useEffect(() => {
    if (amount > 0) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="currency-converter">
      <h2>Convertisseur de devises</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Ajouter d'autres devises */}
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        {/* Ajouter d'autres devises */}
      </select>

      {convertedAmount ? (
        <p>Montant converti : {convertedAmount} {toCurrency}</p>
      ) : (
        <p>Entrez un montant pour voir la conversion.</p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
