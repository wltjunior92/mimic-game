import { useRouter } from "next/dist/client/router";

import { HeaderContainer } from '../styles/components/Header';

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <img src="logo_small.svg" alt="Mimicando" />

      <div className="buttons">
        <button>Home</button>
        <button>Cartas</button>
        <button>Temas</button>
      </div>
    </HeaderContainer>
  )
}
