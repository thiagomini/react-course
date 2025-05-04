import { PropsWithChildren } from 'react';
import Link from './Link';

export interface SidebarProps {
  links: { label: string; path: `/${string}` }[];
}

function Sidebar({ links }: SidebarProps) {
  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <Link to={link.path} key={link.label}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
