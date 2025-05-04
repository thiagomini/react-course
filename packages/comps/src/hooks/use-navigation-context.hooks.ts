import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function useNavigation() {
  const context = useContext(NavigationContext);
  return context;
}

export default useNavigation;
