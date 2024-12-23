// src/services/apiService.js
import { getExchangeRate } from '../services/apiService';

// Fonction pour obtenir les taux de change depuis l'API
export const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    // Remplacez cette URL par l'URL de votre API REST
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    
    // Taux de change pour la devise cible
    const rate = response.data.rates[toCurrency];
    
    return rate;
  } catch (error) {
    console.error("Erreur lors de l'appel API : ", error);
    throw error;
  }
};
