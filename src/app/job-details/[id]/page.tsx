'use client';

import JobDescription from '@/components/jobDetails/description';
import InfoBlock from '@/components/jobDetails/infoBlock';
import Loader from '@/components/loaders/loaderBasic';
import { useJobsId } from '@/hooks/jobsById';
import { FC, useEffect } from 'react';

type JobDetailsPageProps = {
  params: {
    id: string;
  };
};

const JobDetailsPage: FC<JobDetailsPageProps> = ({ params }): JSX.Element => {
  const jobId = decodeURIComponent(params.id);
  const { jobs, loading, trigger } = useJobsId([jobId]);
  const jobDetails = jobs[0];

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="flex flex-col gap-5 items-center">
          <InfoBlock jobDetails={jobDetails} />
          <JobDescription jobDetails={jobDetails} />
        </section>
      )}
    </>
  );
};

export default JobDetailsPage;
