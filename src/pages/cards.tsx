import { useEffect, useState } from "react";

import CardItem from "../components/CardItem";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";

import DrawItens from "../utils/DrawItems";

import themes from '../data/themes.json'
import types from '../data/types.json'
import itens from '../data/itens.json'
import SEO from "../components/SEO";
import TextContentContainer from "../components/TextContentContainer";
import { Select } from "../styles/components/Select";
import { Input } from "../styles/components/Input";
import { ContentSection } from "../styles/pages/Home";

export default function Cards() {

  const [theme, setTheme] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(5);

  const [cardItens, setCardItens] = useState([])

  const [cachedItens, setCachedItens] = useState([])

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
        <div>
          <SettingsContainer>
            <div>
              <Select onChange={e => setTheme(e.target.value)}>
                <option value="" disabled selected hidden>Selecione o Tema</option>
                {themes.map(theme => (
                  <option key={theme.value} value={theme.value}>{theme.theme}</option>
                ))}
              </Select>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <Select onChange={e => setType(e.target.value)}>
                <option value="" disabled selected hidden>Selecione o Tipo</option>
                {types.map(type => (
                  <option key={type.value} value={type.value}>{type.type}</option>
                ))}
              </Select>
            </div>
            <div style={{ marginTop: '1.25rem', width: '100%' }}>
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
          <ContentSection style={{
            width: '80%',
            marginTop: '4rem'
          }}>
            <div style={{}}>
              <h1 style={{
                marginBottom: '1.5rem',
                borderBottom: '2px solid #EE861E',
                paddingBottom: '1.5rem',
                fontWeight: 400
              }}>
                Como funciona a página<br />
                de cartas?
              </h1>
              <p>
                Com mais de 1500 itens (e aumentando) você pode escolher um tema e um tipo para
                poder sortear as cartas!
              </p>
            </div>
          </ContentSection>
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
        marginBottom: '4rem'
      }}>
        <h1 style={{
          fontSize: '2rem'
        }}>
          Os Tipos disponíveis são:
        </h1>
      </ContentSection>

      <ContentSection style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '20rem', marginRight: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>
            <div
              style={{
                width: '45px',
                borderBottom: '2px solid #3BC552',
                marginBottom: '10px'
              }}
            />
            Objeto
          </h1>
          <p>Representa um objeto mesmo, como uma colher, um abajur, um sapato, ou Oboé</p>

        </div>
        <img src="obj_image.svg" style={{ height: '15rem' }} />
      </ContentSection>

      <ContentSection style={{ marginBottom: '4rem' }}>
        <img src="action_image.svg" style={{ width: '20rem' }} />
        <div style={{ maxWidth: '30rem', marginLeft: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>
            <div
              style={{
                width: '45px',
                borderBottom: '2px solid #D42828',
                marginBottom: '10px'
              }}
            />
            Ação ou Habilidade
          </h1>
          <p>
            A definição varia pois depende do tema selecionado.
          </p>

          <p>
            Digamos que o tema selecionado seja o de "Heróis da Marvel".<br />
            Existem várias ações do mundo real que um personagem que<br />
            se enquadra nesse tema tbm pode realizar, como "pular" por<br />
            exemplo, por isso, quando nesses casos, serão sorteados<br />
            habilidades de algum personagem desse universo, como<br />
            "Se transformar no Hulk" por exemplo.
          </p>
        </div>
      </ContentSection>

      <ContentSection style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '20rem', marginRight: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>
            <div
              style={{
                width: '45px',
                borderBottom: '2px solid #EE861E',
                marginBottom: '10px'
              }}
            />
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

      <ContentSection style={{ marginBottom: '4rem' }}>
        <img src="mix_image.svg" style={{ width: '20rem' }} />
        <div style={{ maxWidth: '30rem', marginLeft: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>
            <div
              style={{
                marginBottom: '10px',
                padding: 0
              }}>
              <img src="colored_line.svg" />
            </div>
            Mix
          </h1>
          <p>
            Esse tipo mistura todos os três tipos e pode sortear itens variados.
          </p>
        </div>
      </ContentSection>

    </Container>
  )
}
