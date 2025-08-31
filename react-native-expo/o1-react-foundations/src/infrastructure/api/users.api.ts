import axios from 'axios';
import type { UsersResponse } from '../../shared/types/users.types';

const API_BASE_URL = 'https://reqres.in/api';
const API_KEY = 'reqres-free-v1';

export const getAllUsers = async (page = 1): Promise<UsersResponse> => {
  const { data } = await axios.get<UsersResponse>(`${API_BASE_URL}/users?page=${page}`, {
    headers: { 'x-api-key': API_KEY }
  });
  return data;
};