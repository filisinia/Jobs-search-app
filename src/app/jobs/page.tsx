'use client';

import JobCards from '@/components/jobCards';
import LoadMore from '@/components/loaders/loadMore';
import Loader from '@/components/loaders/loaderBasic';
import Message from '@/components/message';
import Search from '@/components/search';
import { useJobs } from '@/hooks/jobsByQuery';
import { JobDetails } from '@/types';
import { getUserDataFromLS } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

const JobsPage = (): JSX.Element => {
  const userData = getUserDataFromLS();
  const [searchQuery, setSearchQuery] = useState(
    userData ? userData.desiredJobTitle : '',
  );
  const [page, setPage] = useState(1);
  const [jobsDetails, setJobsDetails] = useState<JobDetails[] | null>(null);

  const { jobs, loading, trigger, isMutating } = useJobs(searchQuery, page);

  useEffect(() => {
    trigger();
  }, [trigger, page]);

  useEffect(() => {
    if (jobs.length > 0) {
      setJobsDetails((prevJobs) => (prevJobs ? [...prevJobs, ...jobs] : jobs));
    }
  }, [jobs]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleView = (): void => {
    setPage((prevPage) => prevPage + 1);
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
      ) : jobsDetails && jobsDetails.length !== 0 ? (
        <>
          <JobCards jobs={jobsDetails} />
          <LoadMore onView={handleView} isMutating={isMutating} />
        </>
      ) : (
        <Message text="No jobs were found" />
      )}
    </section>
  );
};

export default JobsPage;
