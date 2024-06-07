import { JobDetails } from '@/types';
import { FC } from 'react';

type JobCardProps = {
  jobDetails: JobDetails;
};

const JobCard: FC<JobCardProps> = ({ jobDetails }): JSX.Element => (
  <section>
    <h2>Job Title</h2>
    <section>
      <div>Job Description</div>
      <div>Job Additional Info</div>
    </section>
  </section>
);

export default JobCard;
