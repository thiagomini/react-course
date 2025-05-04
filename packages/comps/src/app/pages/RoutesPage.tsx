import { Routes } from '../../routes/routes';
import Link from '../components/Link';
import Route from '../components/Route';
import AccordionPage from './AccordionPage';
import ButtonPage from './ButtonPage';
import DropdownPage from './DropdownPage';
import PanelPage from './PanelPage';

function RoutesPage() {
  return (
    <div className="col-span-5">
      <Route path="/">
        <h1>Welcome to Components App</h1>
      </Route>
      <Route path={Routes.Dropdown}>
        <DropdownPage />
      </Route>
      <Route path={Routes.Button}>
        <ButtonPage />
      </Route>
      <Route path={Routes.Accordion}>
        <AccordionPage />
      </Route>
      <Route path={Routes.Panel}>
        <PanelPage />
      </Route>
    </div>
  );
}

export default RoutesPage;
