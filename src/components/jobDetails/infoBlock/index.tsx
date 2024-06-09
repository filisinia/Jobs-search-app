import CardDetails from '@/components/jobCards/jobCard/cardDetails';
import EmployerLogo from '@/components/jobCards/jobCard/cardHeader/employerLogo';
import EmployerWebsite from '@/components/jobCards/jobCard/cardHeader/employerWebsite';
import { JobDetails } from '@/types';
import { FC, useState } from 'react';
import ApplyLink from '@/components/jobDetails/infoBlock/applyLink';
import Heart from '@/components/heart';
import {
  deleteLikedJobFromLS,
  addLikedJobIntoLS,
  checkIsJobLiked,
} from '@/utils/localStorage';

type InfoBlockProps = {
  jobDetails: JobDetails;
};

const InfoBlock: FC<InfoBlockProps> = ({ jobDetails }): JSX.Element => {
  const [isLiked, setIsLiked] = useState(checkIsJobLiked(jobDetails.job_id));

  const handlerHeartBtn = (): void => {
    isLiked
      ? deleteLikedJobFromLS(jobDetails.job_id)
      : addLikedJobIntoLS(jobDetails.job_id);

    setIsLiked(!isLiked);
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-4 p-12 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10">
      <button className="absolute right-5 top-5" onClick={handlerHeartBtn}>
        {isLiked ? <Heart isFilled={true} /> : <Heart />}
      </button>
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
};

export default InfoBlock;
