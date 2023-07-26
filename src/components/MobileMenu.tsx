'use client';

import { useState, MouseEvent } from 'react';
import NavList from './NavList';
import '@/styles/mobile-menu.scss';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMobileBtn = () => {
    setIsOpen(true);
  };

  const onClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
    const className = (e.target as HTMLButtonElement).className;
    if (className.includes('overlay') || className === 'nav__list-link') {
      setIsOpen(false);
    }
  };

  return (
    <div className="mobile-menu">
      <button className="mobile-menu__btn" onClick={onClickMobileBtn}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`overlay ${isOpen ? ' open' : ''}`}
        onClick={onClickOverlay}
        data-key="overlay"
      >
        <NavList />
      </div>
    </div>
  );
}
