'use client';

import JobCards from '@/components/jobCards';
import Message from '@/components/message';
import { getLikedJobsFromLS } from '@/utils/localStorage';

const LikedPage = (): JSX.Element => {
  const likedJobs = getLikedJobsFromLS();

  return (
    <section>
      {likedJobs ? (
        <JobCards jobs={likedJobs} />
      ) : (
        <Message text="You don't have any saved jobs" />
      )}
    </section>
  );
};

export default LikedPage;
