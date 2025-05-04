import { Routes } from '../../routes/routes';
import Link from '../components/Link';
import Route from '../components/Route';
import AccordionPage from './AccordionPage';
import ButtonPage from './ButtonPage';
import DropdownPage from './DropdownPage';
import PanelPage from './PanelPage';

function RoutesPage() {
  return (
    <div className="flex flex-col">
      <Link to={Routes.Dropdown}>
        <b>Dropdown Page</b>
      </Link>
      <Link to={Routes.Button}>
        <b>Button Page</b>
      </Link>
      <Link to={Routes.Accordion}>
        <b>Accordion Page</b>
      </Link>
      <Link to={Routes.Panel}>
        <b>Panel Page</b>
      </Link>
      <div>
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
    </div>
  );
}

export default RoutesPage;
