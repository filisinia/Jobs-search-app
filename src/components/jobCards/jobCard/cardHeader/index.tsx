import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Heart from '@/components/heart';
import { JobDetails } from '@/types';
import {
  addLikedJobIntoLS,
  checkIsJobLiked,
  deleteLikedJobFromLS,
} from '@/utils/localStorage';

type CardHeaderProps = {
  jobDetails: JobDetails;
  imageError: boolean;
  onImageError: () => void;
  onUnlike?: (jobId: string) => void;
};

const CardHeader: FC<CardHeaderProps> = ({
  jobDetails,
  imageError,
  onImageError,
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
        {jobDetails.employer_logo && !imageError ? (
          <Image
            src={jobDetails.employer_logo}
            alt="Company logo"
            width={25}
            height={25}
            onError={onImageError}
          />
        ) : (
          <div className="w-9 h-9 bg-purple-900 rounded-full flex items-center justify-center">
            {jobDetails.employer_name[0]}
          </div>
        )}
        {jobDetails.employer_website ? (
          <Link
            href={jobDetails.employer_website}
            target="_blank"
            className="text-md"
          >
            {jobDetails.employer_name}
          </Link>
        ) : (
          <span className="text-md">{jobDetails.employer_name}</span>
        )}
      </div>
      <button onClick={handlerHeartBtn}>
        {isLiked ? <Heart isFilled={true} /> : <Heart />}
      </button>
    </div>
  );
};

export default CardHeader;
