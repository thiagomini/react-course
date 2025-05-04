import { PropsWithChildren } from 'react';
import useNavigation from '../../hooks/use-navigation-context.hooks';

function Route({ path, children }: PropsWithChildren<{ path: string }>) {
  const { currentPath } = useNavigation();
  if (currentPath === path) {
    return children;
  } else {
    return null;
  }
}

export default Route;
