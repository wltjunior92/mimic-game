import { useState } from "react";

import CardItem from "../components/CardItem";
import Header from "../components/Header";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";
import DrawItens from "../utils/DrawItems";

import themes from '../data/themes.json'
import types from '../data/types.json'
import itens from '../data/itens.json'
import SEO from "../components/SEO";

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

    </Container>
  )
}
