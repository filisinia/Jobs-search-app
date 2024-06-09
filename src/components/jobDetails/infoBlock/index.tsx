import CustomButton from '@/components/customButton';
import CardDetails from '@/components/jobCards/jobCard/cardDetails';
import EmployerLogo from '@/components/jobCards/jobCard/cardHeader/employerLogo';
import EmployerWebsite from '@/components/jobCards/jobCard/cardHeader/employerWebsite';
import { JobDetails } from '@/types';
import { FC } from 'react';
import ApplyLink from './applyLink';

type InfoBlockProps = {
  jobDetails: JobDetails;
};

const InfoBlock: FC<InfoBlockProps> = ({ jobDetails }): JSX.Element => (
  <section className="flex flex-col items-center justify-center gap-4 p-10 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10">
    <h2 className="text-3xl font-bold">{jobDetails.job_title}</h2>
    <div className="flex gap-5 text-2xl">
      <EmployerLogo jobDetails={jobDetails} />
      <EmployerWebsite jobDetails={jobDetails} />
    </div>
    <CardDetails jobDetails={jobDetails} />
    {jobDetails.job_apply_link && (
      <ApplyLink link={jobDetails.job_apply_link} />
    )}
  </section>
);

export default InfoBlock;
