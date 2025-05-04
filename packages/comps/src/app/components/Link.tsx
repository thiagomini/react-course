import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import useNavigation from '../../hooks/use-navigation-context.hooks';
import classNames from 'classnames';
interface LinkProps extends PropsWithChildren {
  to: string;
}

const Link: FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useNavigation();

  const classes = classNames('text-blue-500');

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return; // Ensures the user can open the link in a new tab while holding CTRL or CMD key.
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
};

export default Link;
