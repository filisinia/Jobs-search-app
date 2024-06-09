import CardHeader from '@/components/jobCards/jobCard/cardHeader';
import { JobDetails } from '@/types';
import { FC } from 'react';

type InfoBlockProps = {
  jobDetails: JobDetails;
};

const InfoBlock: FC<InfoBlockProps> = ({ jobDetails }): JSX.Element => (
  <section>
    <h2>{jobDetails.job_title}</h2>
    <CardHeader jobDetails={jobDetails} />
  </section>
);

export default InfoBlock;
