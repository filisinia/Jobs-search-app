'use client';

import { FC } from 'react';

type JobDetailsPageProps = {
  params: {
    id: string;
  };
};

const JobDetailsPage: FC<JobDetailsPageProps> = ({ params }): JSX.Element => {
  return <section>Job Details {params.id}</section>;
};

export default JobDetailsPage;
