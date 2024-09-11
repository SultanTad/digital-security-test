import api from "./api";

const exchangeRates = {
  getExchangeRates() {
    return api.get(`/currency`);
  },
};

export default exchangeRates;
