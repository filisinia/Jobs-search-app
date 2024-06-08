import { UserData } from '@/types';

export const getUserDataFromLS = (): UserData | null => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '');
  } catch {
    return null;
  }
};
