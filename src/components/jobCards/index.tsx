import { JobDetails } from '@/types';
import { FC } from 'react';
import JobCard from '@/components/jobCards/jobCard';

type JobCardsProps = {
  jobs: JobDetails[];
  onUnlike?: (jobId: string) => void;
};

const JobCards: FC<JobCardsProps> = ({ jobs, onUnlike }): JSX.Element => {
  const jobCards = jobs.map((job) => (
    <JobCard key={job.job_id} jobDetails={job} onUnlike={onUnlike} />
  ));

  return <>{jobCards}</>;
};

export default JobCards;
