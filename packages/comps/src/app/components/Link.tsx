import { FC, ReactEventHandler } from 'react';
interface LinkProps {
  to: string;
}

const Link: FC<LinkProps> = ({ to }) => {
  const handleClick: ReactEventHandler = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', to);
  };

  return (
    <a onClick={handleClick} href={to}>
      Click
    </a>
  );
};

export default Link;
