import JobCards from '@/components/jobCards';

const LikedPage = (): JSX.Element => {
  const likedJobs = JSON.parse(localStorage.getItem('likedJobs') || '');

  return (
    <section>
      <JobCards jobs={likedJobs} />
    </section>
  );
};

export default LikedPage;
