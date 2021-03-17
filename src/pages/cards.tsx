import { useEffect, useState } from "react";

import CardItem from "../components/CardItem";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";

import DrawItens from "../utils/DrawItems";

import themes from '../data/themes.json'
import types from '../data/types.json'
import itens from '../data/itens.json'
import SEO from "../components/SEO";
import Select from "../components/Select";
import { Input } from "../styles/components/Input";
import { ContentSection } from "../styles/pages/Home";

export default function Cards() {

  const [theme, setTheme] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(5);

  const [cardItens, setCardItens] = useState([])

  const [cachedItens, setCachedItens] = useState([])

  const [imgProdutoLeft, setImgProdutoLeft] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setImgProdutoLeft(imgProdutoLeft + 1)
    }, 10000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (imgProdutoLeft === 3) {
        setImgProdutoLeft(1)
      } else {
        setImgProdutoLeft(imgProdutoLeft + 1)
      }
    }, 10000)
  }, [imgProdutoLeft])

  function handleDrawCard() {
    setCardItens([])
    if (theme !== '' && type !== '' && quantity > 0 && quantity <= 10) {
      const filteredResult = itens.filter(item => {
        const typeCompare: boolean = type === 'mix' ? true : item.type === type
        return ((item.theme === theme) &&
          typeCompare)
      }
      )

      let sortedList: any[]
      if (cachedItens.length === 0) {
        sortedList = DrawItens(filteredResult, quantity)
      } else {
        const newSourceList = filteredResult.filter(item => {
          return cachedItens.every(compare => item.value !== compare.value)
        })
        sortedList = DrawItens(newSourceList, quantity)
      }

      if (sortedList.length > quantity) {
        sortedList.splice(0, 1)
      }

      setCardItens(sortedList)
      setCachedItens(cachedItens.concat(sortedList))
      if (cachedItens.length >= filteredResult.length) {
        setCachedItens([])
      }
    }
  }

  return (
    <Container>
      <SEO
        title="Cartas"
        description="Sorteie uma carta e desafie seus amigos"
        image="logo_small.svg"
      />

      <ContentContainer>
        <div className="left_content">
          <SettingsContainer>
            <div>
              <Select onChange={setTheme}>
                <option>Escolha o Tema</option>
                {themes.map(theme => (
                  <option key={theme.value} value={theme.value}>{theme.theme}</option>
                ))}
              </Select>
            </div>
            <div>
              <Select onChange={setType}>
                <option>Selecione o Tipo</option>
                {types.map(type => (
                  <option key={type.value} value={type.value}>{type.type}</option>
                ))}
              </Select>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Quantos itens?"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                style={{
                  margin: 0,
                  width: '100%'
                }}
              />
            </div>
            <button type="button" onClick={handleDrawCard}>
              Sortear carta
          </button>
          </SettingsContainer>

        </div>
        {cardItens.length !== 0 ? (
          <CardContainer>
            {cardItens.map(item => (
              <CardItem key={item.id}>{item.item}</CardItem>
            ))}
          </CardContainer>
        ) : (
          <img src="card_img.png" style={{
            width: '320px'
          }} />
        )}
      </ContentContainer>

      <ContentSection style={{
        width: '80%',
        marginTop: '4rem',
        marginBottom: '1rem',
      }}>
        <div>
          <h1 style={{
            marginBottom: '1.5rem',
            borderBottom: '2px solid #EE861E',
            paddingBottom: '1.5rem',
            fontWeight: 400,
            textAlign: 'center'
          }}>
            Como funciona a página<br />
            de cartas?
          </h1>
          <p style={{ textAlign: 'center' }}>
            Com mais de 1500 itens (e aumentando) você pode escolher um tema e um tipo para
            poder sortear as cartas!
          </p>
        </div>
      </ContentSection>

      <div className="ad_hotmart">
        <div>
          <a target="_blank" href="https://go.hotmart.com/O48825232C">
            <img src={`produtos/colorindo-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://go.hotmart.com/W48825225G">
            <img src={`produtos/combo-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
      </div>

      <ContentSection style={{
        width: '80%',
        marginTop: '4rem',
        marginBottom: '4rem'
      }}>
        <h1 style={{
          fontSize: '1.5rem'
        }}>
          Os Tipos disponíveis são:
        </h1>
      </ContentSection>

      <ContentSection appearence="obj" invert={true}>
        <div>
          <h1 style={{ marginBottom: '2rem' }}>
            <div className="line_style" />
            Objeto
          </h1>
          <p>Representa um objeto mesmo, como uma colher, um abajur, um sapato, ou Oboé</p>

        </div>
        <img src="obj_image.svg" style={{ height: '15rem' }} />
      </ContentSection>

      <div style={{ marginTop: '2rem' }} className="ads">
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={5}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07W6PD7QJ&asins=B07W6PD7QJ&linkId=d2e40b8b29b27d8a1e74fa31e4633a83&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=8532505708&asins=8532505708&linkId=468567fa55253d8580572d0404b453dc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=8595086354&asins=8595086354&linkId=4970c1efc35c602cd543c65d577bbbec&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
      </div>

      <ContentSection appearence="act">
        <img src="action_image.svg" style={{ width: '20rem' }} />
        <div>
          <h1 style={{ marginBottom: '2rem' }}>
            <div className="line_style" />
            Ação ou Habilidade
          </h1>
          <p>
            A definição varia pois depende do tema selecionado.
          </p>

          <p>
            Digamos que o tema selecionado seja o de "Heróis da Marvel".
            Existem várias ações do mundo real que um personagem que
            se enquadra nesse tema tbm pode realizar, como "pular" por
            exemplo, por isso, quando nesses casos, serão sorteados
            habilidades de algum personagem desse universo, como
            "Se transformar no Hulk" por exemplo.
          </p>
        </div>
      </ContentSection>

      <div style={{ margin: '3rem 0' }} className="ad_hotmart">
        <div>
          <a target="_blank" href="https://go.hotmart.com/W48825225G">
            <img src={`produtos/combo-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://go.hotmart.com/O48825232C">
            <img src={`produtos/colorindo-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
      </div>

      <ContentSection appearence="pers" invert={true}>
        <div>
          <h1 style={{ marginBottom: '2rem' }}>
            <div className="line_style" />
            Personagem ou Pessoa
          </h1>
          <p>
            Esse também é bastante auto explicativo. Esse tipo trás como resultados nomes de
            pessoas famosas ou personagens relacionados ao
            tema escolhido.
          </p>

        </div>
        <img src="character_image.svg" style={{ height: '15rem' }} />
      </ContentSection>

      <div style={{ marginTop: '2rem' }} className="ads">
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={5}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07HGG85HL&asins=B07HGG85HL&linkId=6110508e6f31dd4b3eeeb0c40384a00a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B01MG62Z5M&asins=B01MG62Z5M&linkId=674fd241289296cc4e8b20a89063f14a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
        <iframe
          style={{ width: '103px', height: '206px' }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07SNL6QR8&asins=B07SNL6QR8&linkId=4a1b5da5800899aa3df442dc66776a17&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
        </iframe>
      </div>

      <ContentSection appearence="mix" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <img src="mix_image.svg" />
        <div>
          <h1 style={{ marginBottom: '2rem' }}>
            <div className="line_style" >
              <img src="colored_line.svg" />
            </div>
            Mix
          </h1>
          <p>
            Esse tipo mistura todos os três tipos e pode sortear itens variados.
          </p>
        </div>
      </ContentSection>

      <div style={{ marginTop: '2rem' }} className="ad_hotmart">
        <div>
          <a target="_blank" href="https://go.hotmart.com/G48825269O">
            <img src={`produtos/metodoFanart-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://go.hotmart.com/O48825232C">
            <img src={`produtos/colorindo-criativo${imgProdutoLeft}.png`} />
          </a>
        </div>
      </div>

    </Container>
  )
}
