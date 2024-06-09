import useSWRMutation from 'swr/mutation';
import { fetchJobById } from '@/api';
import { JobDetails, useJobsResponse } from '@/types';

export const useJobsId = (jobIds: string[]): useJobsResponse => {
  const { data, error, trigger, isMutating } = useSWRMutation<JobDetails[]>(
    jobIds.length > 0 ? jobIds : null,
    () => Promise.all(jobIds.map((id) => fetchJobById(id))),
  );

  return {
    jobs: data || [],
    loading: !error && !data,
    trigger: trigger,
    isMutating: isMutating,
  };
};
