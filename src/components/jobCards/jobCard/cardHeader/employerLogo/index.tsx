import { JobDetails } from '@/types';
import Image from 'next/image';
import { FC, useState } from 'react';

type EmployerLogoProps = {
  jobDetails: JobDetails;
};

const EmployerLogo: FC<EmployerLogoProps> = ({ jobDetails }): JSX.Element => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (): void => {
    setImageError(true);
  };

  return (
    <>
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
    </>
  );
};

export default EmployerLogo;
