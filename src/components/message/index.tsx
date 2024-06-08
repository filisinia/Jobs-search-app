import { FC } from 'react';

type MessageProps = {
  text: string;
};

const Message: FC<MessageProps> = ({ text }): JSX.Element => (
  <p className="text-center py-10">{text}</p>
);

export default Message;
