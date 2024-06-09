'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Message from '@/components/message';
import { useJobsId } from '@/hooks/jobsById';
import { getLikedJobsFromLS } from '@/utils/localStorage';
import { useState } from 'react';

const LikedPage = (): JSX.Element => {
  const [likedJobs, setLikedJobs] = useState<string[]>(
    getLikedJobsFromLS() || [],
  );

  const { jobs, loading } = useJobsId(likedJobs);

  const handleUnlike = (jobId: string): void => {
    const updatedLikedJobs = likedJobs.filter((id) => id !== jobId);
    setLikedJobs(updatedLikedJobs);
  };

  return (
    <section>
      {loading && likedJobs.length !== 0 ? (
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
