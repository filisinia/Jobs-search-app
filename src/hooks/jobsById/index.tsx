import useSWR from 'swr';
import { fetchJobById } from '@/api';
import { JobDetails, useJobsIDResponse } from '@/types';

export const useJobsId = (jobIds: string[]): useJobsIDResponse => {
  console.log(jobIds);
  const { data, error } = useSWR<JobDetails[]>(
    jobIds.length ? jobIds : null,
    () => Promise.all(jobIds.map((id) => fetchJobById(id))),
  );

  return { jobs: data || [], loading: !error && !data };
};
