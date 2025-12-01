import { productsApi } from '../api/productsApi';
import { User } from '../interface/user';

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (data: AuthResponse): { user: User; token: string; } => {
  const { token, ...user } = data;

  return {
    user,
    token,
  };
};

export const authRegister = async (email: string, password: string, fullName: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>('/auth/register', {
      email,
      password,
      fullName,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>('/auth/check-status');

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
