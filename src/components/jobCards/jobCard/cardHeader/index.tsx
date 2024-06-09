import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Heart from '@/components/heart';
import { JobDetails } from '@/types';
import {
  addLikedJobIntoLS,
  checkIsJobLiked,
  deleteLikedJobFromLS,
} from '@/utils/localStorage';
import EmployerLogo from '@/components/jobCards/jobCard/cardHeader/employerLogo';
import EmployerWebsite from '@/components/jobCards/jobCard/cardHeader/employerWebsite';

type CardHeaderProps = {
  jobDetails: JobDetails;
  onUnlike?: (jobId: string) => void;
};

const CardHeader: FC<CardHeaderProps> = ({
  jobDetails,
  onUnlike,
}): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const pathname = usePathname();

  const handlerHeartBtn = (): void => {
    isLiked
      ? deleteLikedJobFromLS(jobDetails.job_id)
      : addLikedJobIntoLS(jobDetails.job_id);

    if (pathname === '/liked' && onUnlike) onUnlike(jobDetails.job_id);

    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const isJobLiked = checkIsJobLiked(jobDetails.job_id);
    setIsLiked(isJobLiked);
  }, [jobDetails.job_id]);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <EmployerLogo jobDetails={jobDetails} />
        <EmployerWebsite jobDetails={jobDetails} />
      </div>
      <button onClick={handlerHeartBtn}>
        {isLiked ? <Heart isFilled={true} /> : <Heart />}
      </button>
    </div>
  );
};

export default CardHeader;
