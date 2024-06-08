'use client';

import JobCards from '@/components/jobCards';
import Search from '@/components/search';
import { useJobs } from '@/hooks/jobs';
import { getUserDataFromLS } from '@/utils/userData';
import { useState } from 'react';

const JobsPage = (): JSX.Element => {
  const userData = getUserDataFromLS();
  const [searchQuery, setSearchQuery] = useState(
    userData ? userData.desiredJobTitle : '',
  );

  const { jobs } = useJobs(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section>
      <Search onSearch={handleSearch} />
      <JobCards jobs={jobs} />
    </section>
  );
};

export default JobsPage;
