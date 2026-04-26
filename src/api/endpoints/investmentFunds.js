import apiClient from '../client';

export const investmentFundsApi = {
  // =========================
  // POSTOJEĆE U SWAGGERU
  // =========================

  createFund(payload) {
    return apiClient.post('/api/investment-funds', payload);
  },

  getAccounts(params = {}) {
    return apiClient.get('/api/accounts', { params });
  },

  getClientAccounts(clientId) {
    return apiClient.get(`/api/clients/${clientId}/accounts`);
  },

  getActuaryAssets(actuaryId) {
    return apiClient.get(`/api/actuary/${actuaryId}/assets`);
  },

  getActuaryProfit(actuaryId) {
    return apiClient.get(`/api/actuary/${actuaryId}/assets/profit`);
  },

  getClientProfit(clientId) {
    return apiClient.get(`/api/client/${clientId}/assets/profit`);
  },

  // =========================
  // NEDOSTAJE U SWAGGERU
  // =========================

  getFunds(params = {}) {
    return apiClient.get('/api/investment-funds', { params });
  },

  getFundDetails(fundId) {
    return apiClient.get(`/api/investment-funds/${fundId}`);
  },

  getFundAssets(fundId) {
    return apiClient.get(`/api/investment-funds/${fundId}/assets`);
  },

  getFundPerformance(fundId, range = 'monthly') {
    return apiClient.get(`/api/investment-funds/${fundId}/performance`, {
      params: { range },
    });
  },

  getManagedFunds() {
    return apiClient.get('/api/me/funds');
  },

  depositToFund(fundId, payload) {
    return apiClient.post(`/api/investment-funds/${fundId}/deposit`, payload);
  },

  withdrawFromFund(fundId, payload) {
    return apiClient.post(`/api/investment-funds/${fundId}/withdraw`, payload);
  },

  investInFund(fundId, payload) {
    return apiClient.post(`/api/investment-funds/${fundId}/invest`, payload);
  },

  sellFundAsset(fundId, assetId, payload) {
    return apiClient.post(
      `/api/investment-funds/${fundId}/assets/${assetId}/sell`,
      payload
    );
  },

  getActuaryPerformances() {
    return apiClient.get('/api/profit-bank/actuaries');
  },
};