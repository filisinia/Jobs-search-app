import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full h-12 backdrop-brightness-125 text-xl">
      <nav className="flex place-content-between items-center w-10/12 m-auto h-full transition-all">
        <div className="flex items-center">
          <Link href="/" className="hover:text-white mr-5 text-2xl">
            Main
          </Link>
          <Link href="/jobs" className="hover:text-white">
            Jobs
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/saved" className="mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="hover:fill-rose-700"
            >
              <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
          </Link>
          <Link href="/user-profile" className="hover:text-white">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
