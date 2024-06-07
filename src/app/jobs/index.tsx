import JobCard from "@/components/JobCard";
import { JobDetails } from "@/types";
import { useState } from "react";

export const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);

  const jobCards = jobs.map((job) => <JobCard key={job.job_id} jobDetails={job} />)

  return (
    <section>
      {jobCards}
    </section>
  );
};

export default Jobs;
