'use client';

import JobCard from '@/components/JobCard';
import { useJobs } from '@/hooks/jobs';

export const Jobs = (): JSX.Element => {
  const { jobs } = useJobs();

  const jobCards = jobs?.map((job) => (
    <JobCard key={job.job_id} jobDetails={job} />
  ));

  return <section>{jobCards}</section>;
};

export default Jobs;
