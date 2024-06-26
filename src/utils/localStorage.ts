import { JobDetails, UserData } from '@/types';

enum keysLS {
  userData = 'userData',
  likedJobs = 'likedJobs',
}

export const setUserDataIntoLS = (userData: UserData): void => {
  localStorage.setItem(keysLS.userData, JSON.stringify(userData));
};

export const getUserDataFromLS = (): UserData | null => {
  try {
    return JSON.parse(localStorage.getItem(keysLS.userData) || '');
  } catch {
    return null;
  }
};

export const getLikedJobsFromLS = (): string[] | null => {
  try {
    return JSON.parse(localStorage.getItem(keysLS.likedJobs) || '');
  } catch {
    return null;
  }
};

export const addLikedJobIntoLS = (likedJobId: string | string[]): void => {
  let likedJobs = getLikedJobsFromLS() || [];

  if (!Array.isArray(likedJobId)) likedJobId = [likedJobId];
  likedJobs = Array.from(new Set([...likedJobs, ...likedJobId]));

  localStorage.setItem(keysLS.likedJobs, JSON.stringify(likedJobs));
};

export const checkIsJobLiked = (jobId: string): boolean => {
  try {
    const likedJobs = getLikedJobsFromLS();
    return likedJobs ? likedJobs.includes(jobId) : false;
  } catch {
    return false;
  }
};

export const deleteUserDataFromLS = (): void => {
  localStorage.removeItem(keysLS.userData);
};

export const deleteLikedJobFromLS = (jobId: string): void => {
  const likedJobIds = getLikedJobsFromLS();
  const updatedJobIds = likedJobIds?.filter(
    (likedJobId) => likedJobId !== jobId,
  );

  if (updatedJobIds) {
    localStorage.setItem(keysLS.likedJobs, JSON.stringify(updatedJobIds));
  }
};
