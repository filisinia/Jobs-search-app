'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Message from '@/components/message';
import { useJobsId } from '@/hooks/jobsById';
import { getLikedJobsFromLS } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

const LikedPage = (): JSX.Element => {
  const [likedJobsIDs, setLikedJobsIDs] = useState<string[]>(
    getLikedJobsFromLS() || [],
  );

  const { jobs, loading, trigger } = useJobsId(likedJobsIDs);

  useEffect(() => {
    trigger();
  }, [trigger, likedJobsIDs]);

  const handleUnlike = (jobId: string): void => {
    const updatedLikedJobs = likedJobsIDs.filter((id) => id !== jobId);
    setLikedJobsIDs(updatedLikedJobs);
  };

  return (
    <section>
      {loading && likedJobsIDs.length !== 0 ? (
        <Loader />
      ) : jobs.length !== 0 ? (
        <section>
          <JobCards jobs={jobs} onUnlike={handleUnlike} />
        </section>
      ) : (
        <Message text="You don't have any saved jobs" />
      )}
    </section>
  );
};

export default LikedPage;
