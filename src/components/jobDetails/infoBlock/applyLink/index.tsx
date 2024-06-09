import { FC } from 'react';

type ApplyLinkProps = {
  link: string;
};

const ApplyLink: FC<ApplyLinkProps> = ({ link }): JSX.Element => (
  <a
    href={link}
    target="_blank"
    className="shadow max-w-max bg-slate-500/30 hover:bg-slate-400/30 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
  >
    Apply
  </a>
);

export default ApplyLink;
