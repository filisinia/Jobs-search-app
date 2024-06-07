import Link from 'next/link';

const Header = (): JSX.Element => (
  <header>
    <nav>
      <Link href="./jobs">Jobs</Link>
      <Link href="./saved">Saved</Link>
      <Link href="./user-profile">Profile</Link>
    </nav>
  </header>
);

export default Header;
