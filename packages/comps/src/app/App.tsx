import { EventHandler, ReactEventHandler, useEffect } from 'react';
import DropdownPage from './pages/DropdownPage';

function targetIsAnchor(
  target: EventTarget | null,
): target is HTMLAnchorElement {
  return !!target && 'href' in target;
}

export function App() {
  useEffect(() => {
    const logPopState = (event: PopStateEvent) => {
      console.log('Trying to go to: ', window.location.pathname);
    };
    window.addEventListener('popstate', logPopState);

    return () => {
      window.removeEventListener('popstate', logPopState);
    };
  }, []);
  return (
    <div>
      <DropdownPage />
    </div>
  );
}

export default App;
