import { useState } from "react";

import CardItem from "../components/CardItem";
import Header from "../components/Header";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";
import { TextContainer } from '../styles/components/TextContentContainer'
import DrawItens from "../utils/DrawItems";

import themes from '../data/themes.json'
import types from '../data/types.json'
import itens from '../data/itens.json'
import SEO from "../components/SEO";
import TextContentContainer from "../components/TextContentContainer";

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
      <Header />

      <ContentContainer>
        <SettingsContainer>
          <div className="combobox_container theme">
            <label>Tema: </label>
            <select onChange={e => setTheme(e.target.value)}>
              <option>--Selecione--</option>
              {themes.map(theme => (
                <option key={theme.value} value={theme.value}>{theme.theme}</option>
              ))}
            </select>
          </div>
          <div className="combobox_container type">
            <label>Tipo: </label>
            <select onChange={e => setType(e.target.value)}>
              <option>--Selecione--</option>
              {types.map(type => (
                <option key={type.value} value={type.value}>{type.type}</option>
              ))}
            </select>
          </div>

          <div className="quantity_container">
            <label>Quantidade:</label>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
            />
          </div>

          <button type="button" onClick={handleDrawCard}>
            Sortear carta
          </button>
        </SettingsContainer>

        {cardItens.length !== 0 && (
          <CardContainer>
            {cardItens.map(item => (
              <CardItem key={item.id}>{item.item}</CardItem>
            ))}
          </CardContainer>
        )}

      </ContentContainer>
      <TextContentContainer>
        <header>
          <h2>Como funciona a página de cartas?</h2>
          <p>
            Com mais de <strong>1500 itens (e aumentando)</strong> você pode escolher um tema e um
            tipo para poder sortear as cartas!
          </p>
        </header>
        <main style={{ marginBottom: '5rem' }}>
          <h2 style={{ margin: '2rem 0', textAlign: 'center' }}>Os tipos a serem selecionados são:</h2>
          <h2>Objeto</h2>
          <p>
            Representa um objeto mesmo, como uma colher, um abajur, um sapato, ou Oboé 😬.
          </p>
          <h2>Ação ou Habilidade</h2>
          <p>
            A definição varia pois depende do <strong>tema selecionado</strong>.<br />
            Digamos que o tema selecionado seja o de <strong>"Heróis da Marvel"</strong>. Existem
            várias ações do mundo real que um personagem que se enquadra nesse tema tbm pode realizar,
            como "pular" por exemplo, por isso, quando nesses casos, serão sorteados habilidades de
            algum personagem desse universo, como <strong>"Se transformar no Hulk"</strong> por exemplo 👍.
          </p>
          <h2>Personagem ou Pessoa</h2>
          <p>
            Esse também é bastante auto explicativo 😅. Esse tipo trás como resultados nomes de
            pessoas famosas ou personagens relacionados ao tema escolhido.
          </p>
          <h2>Mix</h2>
          <p>
            Esse <strong>mistura todos os três tipos</strong> e pode sortear itens variados.
          </p>
        </main>
      </TextContentContainer>


    </Container>
  )
}
