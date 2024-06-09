import { fetchJobs } from '@/api';
import { useJobsResponse } from '@/types';
import useSWRMutation from 'swr/mutation';

export const useJobs = (query?: string, page?: number): useJobsResponse => {
  const { data, error, trigger, isMutating } = useSWRMutation([query], () =>
    fetchJobs(query),
  );

  return {
    jobs: data || [],
    loading: !error && !data,
    trigger: trigger,
    isMutating: isMutating,
  };
};
