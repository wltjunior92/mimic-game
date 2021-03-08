import { useRouter } from "next/dist/client/router";

import { HeaderContainer } from '../styles/components/Header';

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <img src="logo_small.svg" alt="Mimicando" />

      <div className="buttons">
        <button
          onClick={e => {
            e.preventDefault
            router.push('/')
          }}
        >
          Home
        </button>
        <button
          onClick={e => {
            e.preventDefault
            router.push('/cards')
          }}
        >
          Cartas
        </button>
        <button
          onClick={e => {
            e.preventDefault
            router.push('/themes')
          }}
        >
          Temas
        </button>
      </div>
    </HeaderContainer>
  )
}
