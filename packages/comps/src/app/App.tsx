import { Routes } from '../routes/routes';
import Sidebar from './components/Sidebar';

import RoutesPage from './pages/RoutesPage';

export function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
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
