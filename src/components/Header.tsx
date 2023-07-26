import NavList from './NavList';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import '@/styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className="nav">
          <NavList />
          <MobileMenu />
        </nav>
        <a href="tel:+45 65 78 98 76" className="phone phone__header">
          +45 65 78 98 76
        </a>
      </div>
    </header>
  );
}
