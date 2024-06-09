'use client';

import { useRouter } from 'next/navigation';
import { getUserDataFromLS } from '@/utils/localStorage';

const UserInfo = (): JSX.Element | null => {
  const router = useRouter();
  const userData = getUserDataFromLS();

  if (!userData) {
    router.replace('/');
    return null;
  }

  const titles = ['Name', 'Desired job', 'About me'];

  const userElems = titles.map((title, index) => (
    <div key={title}>
      <p className="text-xl font-bold">{title}</p>
      <p>{Object.values(userData)[index]}</p>
    </div>
  ));

  return (
    <section className="flex flex-col justify-center gap-4 p-10 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10 m-auto mt-10">
      <div className="self-center w-24 h-24 bg-purple-900 text-2xl rounded-full flex items-center justify-center">
        {userData.name[0]}
      </div>
      {userElems}
    </section>
  );
};

export default UserInfo;
