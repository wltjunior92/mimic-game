import Link from 'next/link'
import { useState } from 'react';

import { HeaderContainer } from '../styles/components/Header';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMenu() {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  function handleBlur() {
    let closeMenu = false;
    new Promise((reject, resolve) => {
      setTimeout(() => {
        resolve(closeMenu)
      }, 10)
    }).catch(err => { }).finally(() =>
      setOpenMenu(closeMenu)
    )
  }

  return (
    <HeaderContainer openMenu={openMenu}>
      <div className="container">
        <Link href="/">
          <a>
            <img src="logo.png " alt="Mimic Fácil" />
          </a>
        </Link>

        <ul className="normal_buttons">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/board">
              <a>Tabuleiro</a>
            </Link>
          </li>
          <li>
            <Link href="/cards">
              <a>Cartas</a>
            </Link>
          </li>
          <li>
            <Link href="/themes">
              <a>Temas</a>
            </Link>
          </li>
        </ul>

        <button className="menu_button" onClick={handleOpenMenu} onBlur={handleBlur}>
          <img src="icons/menu.svg" />
          <div className="paper">
            <ul className="slide_buttons">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/board">
                  <a>Tabuleiro</a>
                </Link>
              </li>
              <li>
                <Link href="/cards">
                  <a>Cartas</a>
                </Link>
              </li>
              <li>
                <Link href="/themes">
                  <a>Temas</a>
                </Link>
              </li>
            </ul>
          </div>
        </button>
      </div>

    </HeaderContainer>
  )
}
