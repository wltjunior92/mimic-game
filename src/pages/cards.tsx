import Head from "next/head";
import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";

interface ComboBoxes {
  name: string,
  value: string,
}

const themes: ComboBoxes[] = [
  { name: 'Padrão', value: 'padrao' },
  { name: 'Moda', value: 'moda' },
  { name: 'Anime', value: 'anime' },
  { name: 'Herois', value: 'herois' },
  { name: 'Naruto', value: 'naruto' },
]

const difficulties: ComboBoxes[] = [
  { name: 'Fácil', value: 'facil' },
  { name: 'Médio', value: 'medio' },
  { name: 'Difícil', value: 'dificil' },
  { name: 'Impossível', value: 'impossivel' },
]

const types: ComboBoxes[] = [
  { name: 'Objeto', value: 'objeto' },
  { name: 'Ação', value: 'acao' },
  { name: 'Mix', value: 'mix' },
]

const cardItens: string[] = [
  'Item1',
  'Item2',
  'Item3',
  'Item4',
  'Item5',
]

export default function Cards() {
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(5);

  useEffect(() => { console.log(theme, difficulty, type) }, [theme, difficulty, type])

  function handleDrawCard() {

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
            <p>Tema: </p>
            <select onChange={e => setTheme(e.target.value)}>
              {themes.map(theme => (
                <option key={theme.value} value={theme.value}>{theme.name}</option>
              ))}
            </select>
          </div>
          <div className="combobox_container difficulty">
            <p>Dificuldade: </p>
            <select onChange={e => setDifficulty(e.target.value)}>
              {difficulties.map(difficulty => (
                <option key={difficulty.value} value={difficulty.value}>{difficulty.name}</option>
              ))}
            </select>
          </div>
          <div className="combobox_container type">
            <p>Tipo: </p>
            <select onChange={e => setType(e.target.value)}>
              {types.map(type => (
                <option key={type.value} value={type.value}>{type.name}</option>
              ))}
            </select>
          </div>

          <div className="quantity_container">
            <p>Quantidade:</p>
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

        <CardContainer>
          {cardItens.map(item => (
            <CardItem key={item}>{item}</CardItem>
          ))}
        </CardContainer>

      </ContentContainer>

    </Container>
  )
}
