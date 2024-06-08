import { JobDetails, UserData } from '@/types';

export const getUserDataFromLS = (): UserData | null => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '');
  } catch {
    return null;
  }
};

export const getLikedJobsFromLS = (): JobDetails[] | null => {
  try {
    return JSON.parse(localStorage.getItem('likedJobs') || '');
  } catch {
    return null;
  }
};
