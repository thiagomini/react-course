import { FC, PropsWithChildren, ReactEventHandler } from 'react';
import useNavigation from '../../hooks/use-navigation-context.hooks';
interface LinkProps extends PropsWithChildren {
  to: string;
}

const Link: FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useNavigation();
  const handleClick: ReactEventHandler = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
