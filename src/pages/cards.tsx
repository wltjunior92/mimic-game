import Head from "next/head";
import { useEffect, useState } from "react";

import Prismic from 'prismic-javascript'


import CardItem from "../components/CardItem";
import Header from "../components/Header";

import { Container, SettingsContainer, ContentContainer, CardContainer } from "../styles/pages/Cards";
import { client } from "../lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import DrawItens from "../utils/DrawItems";

interface Combobox {
  id: string;
  value: string;
  name: string;
}

interface Item {
  id: string;
  name: string;
}

export default function Cards() {
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(5);

  const [themes, setThemes] = useState<Combobox[]>([])
  const [difficulties, setDifficulties] = useState<Combobox[]>([])
  const [types, setTypes] = useState<Combobox[]>([])

  const [cardItens, setCardItens] = useState<Item[]>([])

  useEffect(() => {
    let themesList: Combobox[] = []
    const promise = new Promise((resolve, reject) => {
      resolve(
        client().query([
          Prismic.Predicates.at('document.type', 'theme')
        ]).then(response => {
          response.results.map(theme => {
            themesList.push({
              id: theme.id,
              value: theme.uid,
              name: theme.data.name[0].text,
            })
          })
        })
      )
    })
    promise.then((res) => {
      setThemes(themesList)
    })
  }, [])

  useEffect(() => {
    let difficultiesList: Combobox[] = []
    const promise = new Promise((resolve, reject) => {
      resolve(
        client().query([
          Prismic.Predicates.at('document.type', 'difficulty')
        ]).then(response => {
          response.results.map(difficulty => {
            difficultiesList.push({
              id: difficulty.id,
              value: difficulty.uid,
              name: difficulty.data.name[0].text,
            })
          })
        })
      )
    })
    promise.then((res) => {
      setDifficulties(difficultiesList)
    })
  }, [])

  useEffect(() => {
    let typesList: Combobox[] = []
    const promise = new Promise((resolve, reject) => {
      resolve(
        client().query([
          Prismic.Predicates.at('document.type', 'type')
        ]).then(response => {
          response.results.map(type => {
            typesList.push({
              id: type.id,
              value: type.uid,
              name: type.data.name[0].text,
            })
          })
        })
      )
    })
    promise.then((res) => {
      setTypes(typesList)
    })
  }, [])

  function handleDrawCard() {
    setCardItens([])
    if (theme !== '' && difficulty !== '' && type !== '' && quantity > 0 && quantity <= 10) {
      let itensList: Item[] = []

      const promise = new Promise((resolve, reject) => {
        resolve(
          client().query([
            Prismic.Predicates.at('document.type', 'item'),
            Prismic.Predicates.at('my.item.theme', theme),
            Prismic.Predicates.at('my.item.difficulty', difficulty),
            Prismic.Predicates.at('my.item.type', type),
          ]).then(response => {
            response.results.map(type => {
              itensList.push({
                id: type.uid,
                name: type.data.item[0].text,
              })
            })
          })
        )
      })
      promise.then((res) => {
        const sortedList: Item[] = DrawItens(itensList, quantity)
        setCardItens(sortedList)
      })
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
                <option key={theme.value} value={theme.id}>{theme.name}</option>
              ))}
            </select>
          </div>
          <div className="combobox_container difficulty">
            <label>Dificuldade: </label>
            <select onChange={e => setDifficulty(e.target.value)}>
              <option>--Selecione--</option>
              {difficulties.map(difficulty => (
                <option key={difficulty.value} value={difficulty.id}>{difficulty.name}</option>
              ))}
            </select>
          </div>
          <div className="combobox_container type">
            <label>Tipo: </label>
            <select onChange={e => setType(e.target.value)}>
              <option>--Selecione--</option>
              {types.map(type => (
                <option key={type.value} value={type.id}>{type.name}</option>
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
            {cardItens.map((item, index) => (
              <CardItem key={index}>{item.name}</CardItem>
            ))}
          </CardContainer>
        )}

      </ContentContainer>

    </Container>
  )
}
