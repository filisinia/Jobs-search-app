import useSWR from 'swr';
import { fetchJobs } from '@/api';
import { JobDetails } from '@/types';

type useJobsResponse = {
  jobs: JobDetails[] | [];
  loading: boolean;
};

export const useJobs = (): useJobsResponse => {
  const pathKey = `/jobs`;
  const { data, error } = useSWR(pathKey, fetchJobs);

  return { jobs: data || [], loading: !error && !data };
};
