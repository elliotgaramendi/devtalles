import axios from "axios";
import type { UsersResponse } from "../interfaces";

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get<UsersResponse>('https://reqres.in/api/users', {
      params: {
        page
      }
    });
    return data;
  } catch (error) {
    console.log(error);
    return { data: [], total_pages: 0, error };
  }
};