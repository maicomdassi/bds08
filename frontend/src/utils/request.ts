import axios from 'axios';
import { FilterData } from '../types';

const BASE_URL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL: BASE_URL
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    gender: filterData?.gender,
    ...extraParams
  };
};
