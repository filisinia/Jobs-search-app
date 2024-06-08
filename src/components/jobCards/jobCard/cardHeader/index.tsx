import { JobDetails } from '@/types';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-7 hover:fill-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardHeader;
