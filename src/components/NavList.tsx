import { navItems } from '@/db/nav-links';

export default function NavList() {
  return (
    <ul className="nav__list">
      {navItems.map((item) => (
        <li className="nav__item" key={item.title}>
          <a href={item.link} className="nav__list-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
