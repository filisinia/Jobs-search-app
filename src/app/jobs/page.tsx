'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Search from '@/components/search';
import { useJobs } from '@/hooks/jobs';
import { getUserDataFromLS } from '@/utils/userData';
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
      {loading ? <Loader /> : <JobCards jobs={jobs} />}
    </section>
  );
};

export default JobsPage;
