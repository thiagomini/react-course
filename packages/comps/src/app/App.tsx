import { Routes } from '../routes/routes';
import Sidebar from './components/Sidebar';

import RoutesPage from './pages/RoutesPage';

export function App() {
  return (
    <div>
      <Sidebar
        links={[
          {
            label: 'Dropdown',
            path: Routes.Dropdown,
          },
          {
            label: 'Buttons',
            path: Routes.Button,
          },
          {
            label: 'Accordion',
            path: Routes.Accordion,
          },
          {
            label: 'Panel',
            path: Routes.Panel,
          },
        ]}
      ></Sidebar>
      <RoutesPage />
    </div>
  );
}

export default App;
