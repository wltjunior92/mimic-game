import Head from "next/head";
import { useEffect, useState } from "react";

import CardItem from "../components/CardItem";
import Header from "../components/Header";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";
import DrawItens from "../utils/DrawItems";

import themes from '../data/themes.json'
import difficulties from '../data/difficulties.json'
import types from '../data/types.json'
import itens from '../data/itens.json'

export default function Cards() {
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(5);

  const [cardItens, setCardItens] = useState([])

  const [cachedItens, setCachedItens] = useState([])

  function handleDrawCard() {
    if (cardItens.length > 0) {
      const emptyList = []
      setCardItens(emptyList)
    }
    if (theme !== '' && difficulty !== '' && type !== '' && quantity > 0 && quantity <= 10) {
      const filteredResult = itens.filter(item =>
        (item.theme === theme) &&
        (item.difficulty === difficulty) &&
        (item.type === type)
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
      <Head>
        <title>Mimicando | Cartas</title>
      </Head>
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
          <div className="combobox_container difficulty">
            <label>Dificuldade: </label>
            <select onChange={e => setDifficulty(e.target.value)}>
              <option>--Selecione--</option>
              {difficulties.map(difficulty => (
                <option key={difficulty.value} value={difficulty.value}>{difficulty.difficulty}</option>
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
              <CardItem key={item.value}>{item.item}</CardItem>
            ))}
          </CardContainer>
        )}

      </ContentContainer>

    </Container>
  )
}
