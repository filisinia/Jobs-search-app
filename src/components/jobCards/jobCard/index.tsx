import { JobDetails } from '@/types';
import { FC, useState } from 'react';
import CardHeader from '@/components/jobCards/jobCard/cardHeader';
import CardDetails from '@/components/jobCards/jobCard/cardBody';
import CustomButton from '@/components/customButton';

type JobCardProps = {
  jobDetails: JobDetails;
};

const JobCard: FC<JobCardProps> = ({ jobDetails }): JSX.Element => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (): void => {
    setImageError(true);
  };

  const handleClick = (): void => {
    console.log('show details page');
  };

  return (
    <section className="flex flex-col gap-2 mb-10 p-5 rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10">
      <div className="min-w-0 flex-1 flex flex-col gap-2">
        <CardHeader
          jobDetails={jobDetails}
          imageError={imageError}
          handleImageError={handleImageError}
        />
        <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-slate-200">
          {jobDetails.job_title}
        </h2>
        <CardDetails jobDetails={jobDetails} />
      </div>
      <p className="line-clamp-4 text-justify">{jobDetails.job_description}</p>
      <CustomButton name="Details" onClick={handleClick} />
    </section>
  );
};

export default JobCard;
