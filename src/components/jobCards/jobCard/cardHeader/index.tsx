import { JobDetails } from '@/types';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heart from '@/components/heart';

type CardHeaderProps = {
  jobDetails: JobDetails;
  imageError: boolean;
  handleImageError: () => void;
};

const CardHeader: FC<CardHeaderProps> = ({
  jobDetails,
  imageError,
  handleImageError,
}): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        {jobDetails.employer_logo && !imageError ? (
          <Image
            src={jobDetails.employer_logo}
            alt="Company logo"
            width={25}
            height={25}
            onError={handleImageError}
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
      <Heart />
    </div>
  );
};

export default CardHeader;
