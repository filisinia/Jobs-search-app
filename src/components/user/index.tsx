'use client';

import { UserData } from '@/types';

const UserInfo = (): JSX.Element => {
  const userData: UserData = JSON.parse(localStorage.getItem('userData') || '');
  const titles = ['Name', 'Desired job', 'About me'];

  const userElems = titles.map((title, index) => (
    <div key={title}>
      <p className="text-xl font-bold">{title}</p>
      <p>{Object.values(userData)[index]}</p>
    </div>
  ));

  return (
    <section className="flex flex-col justify-center gap-4 p-10 max-w-2xl rounded-lg bg-slate-50/5 shadow-lg shadow-indigo-300/10 m-auto mt-10">
      <div className="self-center w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
        You
      </div>
      {userElems}
    </section>
  );
};

export default UserInfo;
