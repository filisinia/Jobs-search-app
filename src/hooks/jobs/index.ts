import useSWR from 'swr';
import { fetchJobs } from '@/api';
import { JobDetails } from '@/types';

type useJobsResponse = {
  jobs: JobDetails[] | [];
  loading: boolean;
};

export const useJobs = (query?: string, page?: number): useJobsResponse => {
  const { data, error } = useSWR([query], () => fetchJobs(query));

  return { jobs: data || [], loading: !error && !data };
};
