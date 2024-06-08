'use client';

import { getUserDataFromLS } from '@/utils/userData';
import { FC, useState } from 'react';
import CustomButton from '../customButton';

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch }): JSX.Element => {
  const userData = getUserDataFromLS();
  const [query, setQuery] = useState(userData ? userData.desiredJobTitle : '');

  const handleSearch = (): void => {
    onSearch(query);
  };

  return (
    <div className="relative flex gap-7 mb-5">
      <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="absolute w-6 left-2 translate-y-1/3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        ></path>
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search job"
        className="w-full bg-slate-100/20 p-1 rounded-sm pl-10 text-white focus:outline-none shadow-lg focus:shadow-indigo-300/10"
      />
      <CustomButton name="Search" onClick={handleSearch} />
    </div>
  );
};

export default Search;
