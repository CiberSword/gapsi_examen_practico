import { axiosClient } from '@/services/axiosClient.js';

export const getProducts = async (keyword = "", page = 1) => {
  const response = await axiosClient.get(`/wlm/walmart-search-by-keyword?keyword=${keyword}&page=${page}&sortBy=best_match`);
  return response.data;
};