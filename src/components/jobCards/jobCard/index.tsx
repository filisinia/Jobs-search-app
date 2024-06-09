import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardHeader from '@/components/jobCards/jobCard/cardHeader';
import CardDetails from '@/components/jobCards/jobCard/cardBody';
import CustomButton from '@/components/customButton';
import { JobDetails } from '@/types';

type JobCardProps = {
  jobDetails: JobDetails;
  onUnlike?: (jobId: string) => void;
};

const JobCard: FC<JobCardProps> = ({ jobDetails, onUnlike }): JSX.Element => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/job-details/${jobDetails.job_id}`);
  };

  return (
    <section className="flex flex-col gap-2 mb-10 p-5 rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10">
      <div className="min-w-0 flex-1 flex flex-col gap-2">
        <CardHeader jobDetails={jobDetails} onUnlike={onUnlike} />
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
