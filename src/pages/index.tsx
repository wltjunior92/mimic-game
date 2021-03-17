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

      <div className="ads">
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={5}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B076LXCSCK&asins=B076LXCSCK&linkId=38c24231d003982658b67be1fd12c55f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07CLHRLPW&asins=B07CLHRLPW&linkId=a3dc68373e8be49a8418fd9a792b70a8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=8568059007&asins=8568059007&linkId=9dc599dde2514166509cbe2689fa7491&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
      </div>

      <h1
        style={{
          marginTop: '4rem',
          padding: '2rem 2rem',
          borderBottom: '3px solid #FFEE00',
        }}
      >
        Sugestão de como jogar
      </h1>
      <h3>
        O Mimic Fácil possui duas páginas que podem ser usadas no jogo
      </h3>

      <main>
        <ContentSection invert={true} leftBorder="#4C07ED">
          <img src="board_image.png" style={{ width: '100%' }} />
          <div>
            <h1>O Tabuleiro</h1>
            <p>O Mimic Fácil possui duas páginas que podem ser usadas no jogo</p>
          </div>
        </ContentSection>
        <ContentSection rightBorder="#EE861E">
          <div>
            <h1>As Cartas</h1>
            <p>Onde você pode sortear os desafios de acordo com os temas e tipos selecionados.</p>
          </div>
          <img src="cards_image.png" style={{ width: '100%' }} />
        </ContentSection>

        <div className="ads">
          <iframe
            style={{ width: '103px', height: '206px' }}
            marginWidth={5}
            marginHeight={0}
            scrolling="no"
            frameBorder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=853252978X&asins=853252978X&linkId=5b7fa751624438cf33dbb3c1118161ba&show_border=true&link_opens_in_new_window=true">
          </iframe>
          <iframe
            style={{ width: '103px', height: '206px' }}
            marginWidth={0}
            marginHeight={0}
            scrolling="no"
            frameBorder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=8568014003&asins=8568014003&linkId=b0cb0b098dac70952c5ffb8a5764caad&show_border=true&link_opens_in_new_window=true">
          </iframe>
          <iframe
            style={{ width: '103px', height: '206px' }}
            marginWidth={0}
            marginHeight={0}
            scrolling="no"
            frameBorder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=8501105872&asins=8501105872&linkId=a41115bf16575d83fe5061a8ed16dfab&show_border=true&link_opens_in_new_window=true">
          </iframe>
        </div>

        <h1 className="warn_title"
          style={{
            marginTop: '4rem',
            padding: '2rem 2rem',
            borderBottom: '3px solid #D42828',
          }}
        >
          Recomenda-se que o uso<br />pelo menos 2 dispositivos
        </h1>

        <ContentSection invert={true}>
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
          <img className="illustra" src="example_img.svg" style={{ height: '20rem' }} />
        </ContentSection>

        <h1 className="warn_title"
          style={{
            margin: '0 0 2rem 0',
            padding: '2rem 2rem',
            borderBottom: '3px solid #E6FF00',
            textAlign: 'center'
          }}
        >
          O Mimic Fácil pode ser jogado em equipe ou cada um por si!
        </h1>

        <ContentSection>
          <div className="only_text">
            <div className="text_left">
              <h1 style={{ fontSize: '2rem', borderBottom: '3px solid #A15305' }}>Cada um por si</h1>
              <p>
                Cada jogador será adicionado na partida e irão revezar entre si para interpretar as
                mímicas. Enquanto um jogador gerencia o tabuleiro distribuíndo os pontos, o jogador
                da vez deve conseguir interpretar o máximo de itens sorteados na página de cartas no
                tempo estabelecido.
              </p>
            </div>
            <div className="text_right">
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

      <div className="ads">
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={5}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B07BTC67VS&asins=B07BTC67VS&linkId=a16cf9ca23f872794ebf742e7fe72a04&show_border=true&link_opens_in_new_window=true">          </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B0152HPXXE&asins=B0152HPXXE&linkId=50f720546cc6033d3fca4cfb7d0af675&show_border=true&link_opens_in_new_window=true">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B08JN2VMGX&asins=B08JN2VMGX&linkId=c8c15c403e934f18e774eff5c40cce4f&show_border=true&link_opens_in_new_window=true">
        </iframe>
      </div>

      <h1
        style={{
          fontSize: '2rem',
          marginTop: '4rem',
          padding: '2rem 2rem',
        }}
      >
        Notícias sobre atualizações!
      </h1>
      <h3>
        A próxima atualização trará um novo sistema de jogo, com tabuleiro de casas para adicionar<br />
      ainda mais desafios à experiência por equipes!
      </h3>
    </Container>
  )
}

export default Home;
