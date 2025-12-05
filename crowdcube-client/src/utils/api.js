import axios from 'axios';
import config from '../config/env.js';

const API_BASE_URL = config.apiUrl;

// Campaign APIs
export const getAllCampaigns = (limit) => {
  const url = limit ? `${API_BASE_URL}/data?limit=${limit}` : `${API_BASE_URL}/data`;
  return axios.get(url);
};

export const getCampaignById = (id) => {
  return axios.get(`${API_BASE_URL}/data/${id}`);
};

export const getMyCampaigns = (email) => {
  return axios.get(`${API_BASE_URL}/my-campaigns?email=${email}`);
};

export const addCampaign = (campaignData) => {
  return axios.post(`${API_BASE_URL}/add-campaign`, campaignData);
};

export const updateCampaign = (id, campaignData) => {
  return axios.put(`${API_BASE_URL}/update-campaign/${id}`, campaignData);
};

export const deleteCampaign = (id) => {
  return axios.delete(`${API_BASE_URL}/delete-campaign/${id}`);
};

// Donation APIs
export const addDonation = (donationData) => {
  return axios.post(`${API_BASE_URL}/donations`, donationData);
};

export const getMyDonations = (email) => {
  return axios.get(`${API_BASE_URL}/my-donations?email=${email}`);
};
