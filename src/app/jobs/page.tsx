'use client';

import JobCards from '@/components/jobCards';
import { useJobs } from '@/hooks/jobs';

const JobsPage = (): JSX.Element => {
  const { jobs } = useJobs();

  return (
    <section>
      <JobCards jobs={jobs} />
    </section>
  );
};

export default JobsPage;
