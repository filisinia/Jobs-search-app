import { JobDetails } from '@/types';
import {
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from '@heroicons/react/16/solid';
import { FC } from 'react';

type CardDetailsProps = {
  jobDetails: JobDetails;
};

const CardDetails: FC<CardDetailsProps> = ({ jobDetails }): JSX.Element => (
  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 text-sm gap-y-2">
    <div className="flex items-center">
      <BriefcaseIcon
        className="mr-1.5 h-5 w-5 flex-shrink-0"
        aria-hidden="true"
      />
      {jobDetails.job_employment_type}
    </div>
    <div className="flex items-center gap-1">
      <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
      <span>{jobDetails.job_country}</span>
      <span>{jobDetails.job_city}</span>
      <span>{jobDetails.job_is_remote ? 'Remote' : ''}</span>
    </div>
    {jobDetails.job_min_salary || jobDetails.job_max_salary ? (
      <div className="flex items-center gap-1">
        <CurrencyDollarIcon
          className="mr-1.5 h-5 w-5 flex-shrink-0"
          aria-hidden="true"
        />
        <span>
          {jobDetails.job_min_salary.toLocaleString()}
          {jobDetails.job_salary_currency}
        </span>
        {jobDetails.job_min_salary && jobDetails.job_max_salary ? (
          <span>-</span>
        ) : (
          ''
        )}
        <span>
          {jobDetails.job_max_salary.toLocaleString()}
          {jobDetails.job_salary_currency}
        </span>
      </div>
    ) : (
      ''
    )}
    <div className="flex items-center">
      <CalendarIcon
        className="mr-1.5 h-5 w-5 flex-shrink-0"
        aria-hidden="true"
      />
      {new Date(jobDetails.job_posted_at_datetime_utc).toLocaleDateString()}
    </div>
  </div>
);

export default CardDetails;
