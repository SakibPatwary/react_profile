import React, { useState } from 'react'
import logo from "../../img/logo.png";

const links = [
  { href: '#skills', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#works', label: 'Selected work' },
]

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <a className="brand-link" href="#top" aria-label="Sakib Patwary, home" onClick={closeMenu}>
          <img src={logo} alt="Sakib portfolio" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav id="site-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  )
}

export default Topbar
