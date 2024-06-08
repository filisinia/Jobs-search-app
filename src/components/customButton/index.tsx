import { FC } from 'react';

type CustomButtonProp = {
  name: string;
  onClick: () => void;
};

const CustomButton: FC<CustomButtonProp> = ({ name, onClick }): JSX.Element => (
  <button
    className="shadow bg-indigo-500/30 hover:bg-indigo-400/30 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
    onClick={onClick}
  >
    {name}
  </button>
);

export default CustomButton;
