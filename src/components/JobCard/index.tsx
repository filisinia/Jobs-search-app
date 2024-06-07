import { JobDetails } from '@/types';
import {
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from '@heroicons/react/16/solid';
import { FC } from 'react';

type JobCardProps = {
  jobDetails: JobDetails;
};

const JobCard: FC<JobCardProps> = ({ jobDetails }): JSX.Element => (
  <section className="mb-5">
    <div className="min-w-0 flex-1">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-slate-200 mb-2">
        {jobDetails.job_title}
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 mb-1 text-sm gap-y-2">
        <div className="flex items-center">
          <BriefcaseIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0"
            aria-hidden="true"
          />
          Full-time
        </div>
        <div className="flex items-center">
          <MapPinIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0"
            aria-hidden="true"
          />
          Remote
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0"
            aria-hidden="true"
          />
          $120k – $140k
        </div>
        <div className="flex items-center">
          <CalendarIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0"
            aria-hidden="true"
          />
          Closing on January 9, 2020
        </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
      reprehenderit modi obcaecati quas ex magni voluptate, in, officia iure sit
      culpa quisquam! Perferendis minus quisquam maiores modi animi. Doloremque,
      saepe?
    </div>
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-slate-300 mt-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      Details
    </button>
  </section>
);

export default JobCard;
