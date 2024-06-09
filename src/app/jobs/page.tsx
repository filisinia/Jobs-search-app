'use client';

import JobCards from '@/components/jobCards';
import Loader from '@/components/loader';
import Message from '@/components/message';
import Search from '@/components/search';
import { useJobs } from '@/hooks/jobsByQuery';
import { getUserDataFromLS } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

const JobsPage = (): JSX.Element => {
  const userData = getUserDataFromLS();
  const [searchQuery, setSearchQuery] = useState(
    userData ? userData.desiredJobTitle : '',
  );

  const { jobs, loading, trigger, isMutating } = useJobs(searchQuery);

  useEffect(() => {
    trigger();
  }, [trigger]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section>
      <Search
        onSearch={handleSearch}
        trigger={trigger}
        isMutating={isMutating}
      />
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
