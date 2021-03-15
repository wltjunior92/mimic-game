import Link from 'next/link'

import { HeaderContainer } from '../styles/components/Header';

export default function Header() {

  return (
    <HeaderContainer>
      <div className="container">
        <Link href="/">
          <a>
            <img src="logo.png " alt="Mimic Fácil" />
          </a>
        </Link>

        <ul>
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

    </HeaderContainer>
  )
}
