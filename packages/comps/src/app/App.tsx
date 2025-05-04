import { EventHandler, ReactEventHandler, useEffect } from 'react';
import DropdownPage from './pages/DropdownPage';
import useNavigation from '../hooks/use-navigation-context.hooks';
import Link from './components/Link';

function targetIsAnchor(
  target: EventTarget | null,
): target is HTMLAnchorElement {
  return !!target && 'href' in target;
}

export function App() {
  const { currentPath, navigate } = useNavigation();
  console.log(`Current Path: ${currentPath}`);
  return (
    <div>
      <DropdownPage />
      <Link to="test" />
      <hr></hr>
      <button onClick={() => navigate('button')}>Example Navigation!</button>
    </div>
  );
}

export default App;
