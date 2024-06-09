'use client';

import InfoBlock from '@/components/jobDetails/infoBlock';
import Loader from '@/components/loader';
import Message from '@/components/message';
import { useJobsId } from '@/hooks/jobsById';
import { FC, useEffect } from 'react';

type JobDetailsPageProps = {
  params: {
    id: string;
  };
};

const JobDetailsPage: FC<JobDetailsPageProps> = ({ params }): JSX.Element => {
  const { jobs, loading, trigger } = useJobsId([params.id]);

  useEffect(() => {
    trigger();
  }, [trigger]);

  console.log(jobs);

  return <span>ddd</span>;

  // return (
  //   <section>
  //     {loading ? (
  //       <Loader />
  //     ) : jobs.length !== 0 ? (
  //       <InfoBlock jobDetails={jobs[0]} />
  //     ) : (
  //       <Message text="You don't have any saved jobs" />
  //     )}
  //   </section>
  // );
};

export default JobDetailsPage;
