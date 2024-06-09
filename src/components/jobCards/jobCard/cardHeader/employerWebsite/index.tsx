import { JobDetails } from '@/types';
import Link from 'next/link';
import { FC } from 'react';

type EmployerWebsiteProps = {
  jobDetails: JobDetails;
};

const EmployerWebsite: FC<EmployerWebsiteProps> = ({
  jobDetails,
}): JSX.Element => (
  <>
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
  </>
);

export default EmployerWebsite;
