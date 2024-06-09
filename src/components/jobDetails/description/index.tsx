import { JobDetails } from '@/types';
import { FC } from 'react';

type JobDescriptionProps = {
  jobDetails: JobDetails;
};

const JobDescription: FC<JobDescriptionProps> = ({
  jobDetails,
}): JSX.Element => {
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Job Description</h2>
      <div>{formatText(jobDetails.job_description)}</div>
    </section>
  );
};

export default JobDescription;
