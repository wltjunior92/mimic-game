import SEO from '../components/SEO';
import {
  Container, ContentSection,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Mimic Fácil, a melhor e mais fácil maneira de se divertir!"
        image="logo_small.svg"
        shouldExcludeTitleSuffix
      />

      <header>
        <div>
          <div>
            <h1>O que é o Mimic Fácil?</h1>
            <p>
              <strong>Mimic Fácil</strong> é a maneira mais fácil e rápida de jogar o famoso Jogo de Mímica com
              seus amigos. Inspirado nos modelos mais famosos (imagem & Ação, Jogo de Mímica,
              Mimicando, Imitatrix, etc), o Mimic Fácil é um jogo de mímica online completamente
              gratuito e de fácil acesso!
            </p>
          </div>
          <div>
            <h2>
              Você não precisa baixar nada e<br />
              nem se preocupar com cadastros!<br />
              Basta acessa e jogar da forma<br />
              que achar mais divertida!
            </h2>
          </div>
        </div>
        <img src="playing_img.svg" />
      </header>

      <h1
        style={{
          fontSize: '3rem',
          marginTop: '4rem',
          padding: '2rem 2rem',
          borderBottom: '3px solid #FFEE00',
        }}
      >
        Sugestão de como jogar
      </h1>
      <h3>
        O Mimic Fácil possui duas páginas que podem ser<br />usadas no jogo
      </h3>

      <main>
        <ContentSection>
          <img src="board_image.png" />
          <div style={{ borderLeft: '12px solid #4C07ED' }}>
            <h1>O Tabuleiro</h1>
            <p>O Mimic Fácil possui duas páginas que podem ser usadas no jogo</p>
          </div>
        </ContentSection>
        <ContentSection>
          <div style={{ borderRight: '12px solid #EE861E' }}>
            <h1>As Cartas</h1>
            <p>Onde você pode sortear os desafios de acordo com os temas e tipos selecionados.</p>
          </div>
          <img src="cards_image.png" />
        </ContentSection>

        <h1
          style={{
            fontSize: '3rem',
            marginTop: '4rem',
            padding: '2rem 2rem',
            borderBottom: '3px solid #D42828',
          }}
        >
          Recomenda-se que o uso<br />pelo menos 2 dispositivos
        </h1>

        <ContentSection>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Exemplo</h1>
            <p>
              Um notebook ou smartphone acessa a página do tabuleiro enquanto um outro
              smartphone acessa as cartas.
            </p>
            <p>
              Enquanto um gerencia o tempo e adiciona os pontos das equipes o outro é usado pelo
              jogador que irá realizar as mímicas para sortear os desafios!
            </p>
          </div>
          <img src="example_img.svg" style={{ height: '25rem' }} />
        </ContentSection>

        <h1
          style={{
            fontSize: '3rem',
            margin: '4rem 0',
            padding: '2rem 2rem',
            borderBottom: '3px solid #E6FF00',
          }}
        >
          O Mimic Fácil pode ser jogado<br />em equipe ou cada um por si!
        </h1>

        <ContentSection>
          <div className="only_text">
            <div style={{ marginRight: '3rem' }}>
              <h1 style={{ fontSize: '2rem', borderBottom: '3px solid #A15305' }}>Cada um por si</h1>
              <p>
                Cada jogador será adicionado na partida e irão revezar entre si para interpretar as
                mímicas. Enquanto um jogador gerencia o tabuleiro distribuíndo os pontos, o jogador
                da vez deve conseguir interpretar o máximo de itens sorteados na página de cartas no
                tempo estabelecido.
              </p>
            </div>
            <div style={{ marginLeft: '3rem' }}>
              <h1 style={{ fontSize: '2rem', borderBottom: '3px solid #390DA1' }}>Equipes</h1>
              <p>
                Adicione as equipes e uma equipe joga por vêz. Durante sua rodada, a equipe manda
                um jogador para interpretar as mímicas. O jogador da vêz precisa sortear uma carta
                e tentar fazer o máximo de itens da carta no período de tempo estabelecido!
              </p>
            </div>
          </div>
        </ContentSection>
      </main>

      <h1
        style={{
          fontSize: '2rem',
          marginTop: '4rem',
          padding: '2rem 2rem',
        }}
      >
        Notícias sobre atualizações!
      </h1>
      <h3 style={{ marginBottom: '4rem' }}>
        A próxima atualização trará um novo sistema de jogo, com tabuleiro de casas para adicionar<br />
      ainda mais desafios à experiência por equipes!
      </h3>
    </Container>
  )
}

export default Home;
