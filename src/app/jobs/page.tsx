'use client';

import JobCard from '@/components/jobCard';
import { useJobs } from '@/hooks/jobs';

const JobsPage = (): JSX.Element => {
  const { jobs } = useJobs();

  const jobCards = jobs?.map((job) => (
    <JobCard key={job.job_id} jobDetails={job} />
  ));

  return <section>{jobCards}</section>;
};

export default JobsPage;
