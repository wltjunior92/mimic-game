import { FormEvent, useEffect, useState } from 'react';

import Countdown from '../components/Countdown';
import PlayerCard from '../components/PlayerCard';
import SEO from '../components/SEO';
import {
  Container,
  PlayersDisplay,
  SortTypeButton,
  AddPlayerContainer
} from '../styles/pages/Board';
import { Select } from '../styles/components/Select'

import themes from '../data/themes.json'
import types from '../data/typesForDraw.json'

interface Player {
  id: string;
  name: string;
  color: string;
}

const Board: React.FC = () => {
  const [hasGeneratedColor, setHasGeneratedColor] = useState(false)
  const [lastRandomColor, setLastRandomColor] = useState(0)

  const [type, setType] = useState('')
  const [isDrawingType, setIsDrawingType] = useState(false)

  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayersList] = useState<Player[]>([])

  const colors: string[] = [
    '#86CCDB',
    '#DBD54B',
    '#E497E1',
    '#4EDC5C',
    '#8D48AE',
    '#8B89EF',
    '#24242C',
    '#A32323',
    '#E88108',
    '#DA1C60',
  ]

  function insertPlayer(event: FormEvent) {
    event.preventDefault()

    let random: number;
    if (!hasGeneratedColor) {
      random = Math.floor(Math.random() * colors.length)
      setLastRandomColor(random)
      setHasGeneratedColor(true)
    } else {
      setLastRandomColor(lastRandomColor + 1)
    }
    if (lastRandomColor >= (colors.length - 1)) {
      setLastRandomColor(0)
    }
    const name = playerName;

    const color = colors[lastRandomColor];
    const id = (new Date()).valueOf().toString()
    const newPlayer: Player = { id, name, color }
    setPlayersList([...playersList, newPlayer])
  }

  useEffect(() => {
    console.log(playersList)
  }, [playersList])

  function deletePlayer(id: string) {
    const index = playersList.findIndex(player => player.id === id)
    const copyPlayersList = Array.from(playersList)
    copyPlayersList.splice(index, 1)
    setPlayersList(copyPlayersList)
  }

  function handleDrawType() {
    setIsDrawingType(true)
    const random = Math.floor(Math.random() * (types.length - 0) + 0);
    let type: string;
    const promise = new Promise((resolve, reject) => {
      type = types[random].type
      setTimeout(() =>
        resolve(type)
        , 1500)
    })
    promise.then(param => setType(String(param)))
    promise.finally(() => setIsDrawingType(false))
  }

  return (
    <Container>
      <SEO
        title="Mimic Fácil, a melhor e mais fácil maneira de se divertir!"
        image="logo_small.svg"
        shouldExcludeTitleSuffix
      />

      <div className="data_settings_container">
        <Countdown />
        <div className="sorting_settings_container">
          <div className="sorting_settings">
            <Select>
              <option value="" disabled selected hidden>Escolha o Tema!</option>
              {themes.map(theme => (
                <option key={theme.value} value={theme.value}>{theme.theme}</option>
              ))}
            </Select>
            <SortTypeButton isSorting={isDrawingType}>
              <button type="button" onClick={handleDrawType}>
                {type === '' && !isDrawingType ? (
                  <h2>Clique para sortear<br />um tipo...</h2>
                ) : (
                  <>
                    {isDrawingType ? (
                      <h2></h2>
                    ) : (
                      <h2>{type}</h2>
                    )}
                  </>
                )}
              </button>
            </SortTypeButton>
            <AddPlayerContainer>
              <form onSubmit={event => insertPlayer(event)}>
                <input
                  type="text"
                  placeholder="Jogador ou equipe"
                  onChange={event => setPlayerName(event.target.value)}
                />
                <button type="submit">
                  <img src="icons/material-group-add.svg" alt="Add" />
                </button>
              </form>
            </AddPlayerContainer>
          </div>
        </div>
      </div>

      {playersList.length > 0 ? (
        <PlayersDisplay>
          {playersList.map(player => (
            <PlayerCard key={player.id} name={player.name} color={player.color}>
              <button
                type="button"
                className="close_button"
                onClick={e => deletePlayer(player.id)}
              >
                <img src="icons/close.png" alt="Fechar" />
              </button>
            </PlayerCard>
          ))}
        </PlayersDisplay>
      ) : (
        <h1
          className="add_players_message"
          style={{
            margin: '3rem 0 6rem 0',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 400
          }}
        >
          Adicione algum<br />jogador 😛
        </h1>
      )}

    </Container>
  )
}

export default Board;
