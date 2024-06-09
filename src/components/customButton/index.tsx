import { FC } from 'react';

type CustomButtonProp = {
  name: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const CustomButton: FC<CustomButtonProp> = ({
  name,
  onClick,
  isDisabled = false,
}): JSX.Element => (
  <button
    className="shadow max-w-max bg-indigo-500/30 hover:bg-indigo-400/30 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
    onClick={onClick}
    disabled={isDisabled}
  >
    {name}
  </button>
);

export default CustomButton;
