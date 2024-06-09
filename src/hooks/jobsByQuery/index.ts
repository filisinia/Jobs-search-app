import { fetchJobs } from '@/api';
import { useJobsResponse } from '@/types';
import useSWRMutation from 'swr/mutation';

export const useJobs = (query?: string, page = 1): useJobsResponse => {
  const { data, error, trigger, isMutating } = useSWRMutation(
    [query, page],
    () => fetchJobs(query, page),
  );

  return {
    jobs: data || [],
    loading: !error && !data,
    trigger: trigger,
    isMutating: isMutating,
  };
};
