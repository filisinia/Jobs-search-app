'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Message from '@/components/message';
import Search from '@/components/search';
import { useJobs } from '@/hooks/jobs';
import { getUserDataFromLS } from '@/utils/localStorage';
import { useState } from 'react';

const JobsPage = (): JSX.Element => {
  const userData = getUserDataFromLS();
  const [searchQuery, setSearchQuery] = useState(
    userData ? userData.desiredJobTitle : '',
  );

  const { jobs, loading } = useJobs(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : jobs.length !== 0 ? (
        <JobCards jobs={jobs} />
      ) : (
        <Message text="No jobs were found" />
      )}
    </section>
  );
};

export default JobsPage;
