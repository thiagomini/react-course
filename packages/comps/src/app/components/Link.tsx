import {
  ComponentProps,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import useNavigation from '../../hooks/use-navigation-context.hooks';
import classNames from 'classnames';
interface LinkProps extends PropsWithChildren {
  to: string;
  activeClassName?: string;
  className: string;
}

const Link: FC<LinkProps> = ({
  to,
  children,
  className,
  activeClassName = 'font-bold',
}) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    currentPath === to && activeClassName,
    className,
  );

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
