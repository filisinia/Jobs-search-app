import { JobDetails } from '@/types';
import {
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

type JobCardProps = {
  jobDetails: JobDetails;
};

const JobCard: FC<JobCardProps> = ({ jobDetails }): JSX.Element => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="flex flex-col gap-2 mb-10 p-5 rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10">
      <div className="min-w-0 flex-1 flex flex-col gap-2">
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
        <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-slate-200">
          {jobDetails.job_title}
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 text-sm gap-y-2">
          <div className="flex items-center">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
            {jobDetails.job_employment_type}
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
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
            {new Date(
              jobDetails.job_posted_at_datetime_utc,
            ).toLocaleDateString()}
          </div>
        </div>
      </div>
      <p className="line-clamp-4 text-justify">{jobDetails.job_description}</p>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-slate-300 py-2 px-5 w-max text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Details
      </button>
    </section>
  );
};

export default JobCard;
