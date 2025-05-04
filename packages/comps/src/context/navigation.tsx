import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import { useState } from 'react';

const NavigationContext = createContext<{
  currentPath: string;
  navigate: (to: string) => void;
}>({
  currentPath: '',
  navigate: () => {},
});

export interface NavigationProviderProps extends PropsWithChildren {}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);
  const navigate = useCallback(
    (to: string) => {
      window.history.pushState({}, '', to);
      setCurrentPath(to);
    },
    [setCurrentPath],
  );
  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
