import useSWR from 'swr';
import { fetchJobs } from '@/api';
import { useJobsResponse } from '@/types';

export const useJobs = (query?: string, page?: number): useJobsResponse => {
  const { data, error } = useSWR([query], () => fetchJobs(query));

  return { jobs: data || [], loading: !error && !data };
};
