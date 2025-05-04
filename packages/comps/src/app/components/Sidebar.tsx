import Link from './Link';

export interface SidebarProps {
  links: { label: string; path: `/${string}` }[];
}

function Sidebar({ links }: SidebarProps) {
  return (
    <nav className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.label}
          className="mb-3"
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
