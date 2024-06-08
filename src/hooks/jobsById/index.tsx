import useSWR from 'swr';
import { fetchJobById } from '@/api';
import { JobDetails, useJobsResponse } from '@/types';

export const useJobsId = (jobIds: string[]): useJobsResponse => {
  const { data, error } = useSWR<JobDetails[]>(jobIds, () =>
    Promise.all(jobIds.map((id) => fetchJobById(id))),
  );

  return { jobs: data || [], loading: !error && !data };
};
