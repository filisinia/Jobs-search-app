import { JobDetails } from '@/types';
import { FC } from 'react';
import JobCard from '@/components/jobCards/jobCard';

type JobCardsProps = {
  jobs: JobDetails[];
};

const JobCards: FC<JobCardsProps> = ({ jobs }): JSX.Element => {
  const jobCards = jobs.map((job) => (
    <JobCard key={job.job_id} jobDetails={job} />
  ));

  return <>{jobCards}</>;
};

export default JobCards;
