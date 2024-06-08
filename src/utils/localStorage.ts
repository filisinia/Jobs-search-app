import { JobDetails, UserData } from '@/types';

enum keysLS {
  userData = 'userData',
  likedJobs = 'likedJobs',
}

export const setUserDataIntoLS = (userData: UserData): void => {
  localStorage.setItem(keysLS.userData, JSON.stringify(userData));
};

export const addLikedJobIntoLS = (likedJobId: string): void => {
  const likedJobs = JSON.parse(localStorage.getItem(keysLS.likedJobs) || '[]');

  const updatedLikedJobs = [...likedJobs, likedJobId];
  localStorage.setItem(keysLS.likedJobs, JSON.stringify(updatedLikedJobs));
};

export const getUserDataFromLS = (): UserData | null => {
  try {
    return JSON.parse(localStorage.getItem(keysLS.userData) || '');
  } catch {
    return null;
  }
};

export const getLikedJobsFromLS = (): JobDetails[] | null => {
  try {
    return JSON.parse(localStorage.getItem(keysLS.likedJobs) || '');
  } catch {
    return null;
  }
};

export const deleteUserDataFromLS = (): void => {
  localStorage.removeItem(keysLS.userData);
};
