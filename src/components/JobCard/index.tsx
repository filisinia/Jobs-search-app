import { JobDetails } from '@/types';
import { FC } from 'react';

type JobCardProps = {
  jobDetails: JobDetails;
};

const JobCard: FC<JobCardProps> = ({ jobDetails }): JSX.Element => (
  <section className="flex flex-col">
    <h2>{jobDetails.job_title}</h2>
    <section>
      <div>{jobDetails.job_description}</div>
      <div>
        <span>{jobDetails.employer_name}</span>
        <span>{jobDetails.employer_company_type}</span>
        <span>{jobDetails.employer_website}</span>
      </div>
    </section>
  </section>
);

export default JobCard;
