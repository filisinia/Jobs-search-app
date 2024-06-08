'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Message from '@/components/message';
import { useJobsId } from '@/hooks/jobsById';
import { getLikedJobsFromLS } from '@/utils/localStorage';

const LikedPage = (): JSX.Element => {
  const likedJobs = getLikedJobsFromLS() || [];

  const { jobs, loading } = useJobsId(likedJobs);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : jobs.length !== 0 ? (
        <section>
          <JobCards jobs={jobs} />
        </section>
      ) : (
        <Message text="You don't have any saved jobs" />
      )}
    </section>
  );
};

export default LikedPage;
