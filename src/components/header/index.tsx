'use client';

import { getUserDataFromLS } from '@/utils/userData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const userData = getUserDataFromLS();

  const handleLogout = (): void => {
    localStorage.removeItem('userData');
    pathname === '/' ? router.replace('/create-profile') : router.replace('/');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full h-14 text-xl backdrop-brightness-150 backdrop-blur-3xl">
      <nav className="flex place-content-between items-center w-10/12 m-auto h-full transition-all">
        <div className="flex items-center">
          <Link
            href="/"
            className={`hover:text-white mr-5 text-2xl ${pathname === '/' && 'underline underline-offset-4'}`}
          >
            Main
          </Link>
          <Link
            href="/jobs"
            className={`"hover:text-white" ${pathname === '/jobs' && 'underline underline-offset-4'}`}
          >
            Jobs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/saved">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className={`size-7 hover:fill-white" ${pathname === '/saved' && 'underline underline-offset-4'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>
          <Link
            href={userData ? '/user-profile' : '/create-profile'}
            className={`hover:text-white" ${(pathname === '/user-profile' || pathname === '/create-profile') && 'underline underline-offset-4'}`}
          >
            {userData ? 'Profile' : 'Sign up'}
          </Link>
          {userData && <button onClick={handleLogout}>Log out</button>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
