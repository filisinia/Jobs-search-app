'use client';

import InfoBlock from '@/components/jobDetails/infoBlock';
import Loader from '@/components/loader';
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

  return <>{loading ? <Loader /> : <InfoBlock jobDetails={jobDetails} />}</>;
};

export default JobDetailsPage;
