import Link from 'next/link';

export default function App() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 mb-10 p-10 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10 m-auto mt-10">
      <h1 className="text-4xl font-bold">
        Welcome to this job search platform!
      </h1>
      <p className="text-xl">
        Here, you can easily browse, save, and apply for jobs that match your
        interests. Create an account to unlock personalized job recommendations
        and maximize your job search potential
      </p>
      <Link
        href="/jobs"
        className="shadow max-w-max bg-slate-500/40 hover:bg-slate-400/30 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
      >
        Search
      </Link>
    </section>
  );
}
