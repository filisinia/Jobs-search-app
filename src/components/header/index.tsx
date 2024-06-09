'use client';

import { deleteUserDataFromLS, getUserDataFromLS } from '@/utils/localStorage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Heart from '@/components/heart';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const userData = getUserDataFromLS();

  const handleLogout = (): void => {
    deleteUserDataFromLS();
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
            className={`hover:text-white ${pathname === '/jobs' && 'underline underline-offset-4'}`}
          >
            Jobs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/liked">
            {pathname === '/liked' ? <Heart isFilled={true} /> : <Heart />}
          </Link>
          <Link
            suppressHydrationWarning
            href={userData ? '/user-profile' : '/create-profile'}
            className={`hover:text-white ${(pathname === '/user-profile' || pathname === '/create-profile') && 'underline underline-offset-4'}`}
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
