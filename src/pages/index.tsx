import Head from 'next/head'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import PlayerCard from '../components/PlayerCard';
import {
  Container,
  Countdown,
  Settings,
  StartCountdownButton,
  StopCountdownButton,
  ResetCountdownButton,
  PlayersDisplay
} from '../styles/pages/Home';

interface Player {
  name: string;
  color: string;
}

let countdownTimeout: NodeJS.Timeout;

const Home: React.FC = () => {
  const [initialValue, setInitialValue] = useState(0);
  const [time, setTime] = useState(0);
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const [hasGeneratedColor, setHasGeneratedColor] = useState(false)
  const [lastRandomColor, setLastRandomColor] = useState(0)

  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayersList] = useState<Player[]>([])

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isCountdownActive && time === 0) {
      setHasFinished(true)
      setIsCountdownActive(false)
    }
  }, [isCountdownActive, time])

  useEffect(() => {
    setTime(initialValue * 60)
  }, [initialValue])

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsCountdownActive(false)
    setTime(initialValue * 60)
    setHasFinished(false)
  }

  function startCountdown() {
    setIsCountdownActive(true);
  }

  function insertPlayer() {
    let random: number;
    if (!hasGeneratedColor) {
      random = Math.floor(Math.random() * colors.length)
      console.log(random);
      setLastRandomColor(random)
      setHasGeneratedColor(true)
    } else {
      setLastRandomColor(lastRandomColor + 1)
    }
    if (lastRandomColor >= (colors.length - 1)) {
      setLastRandomColor(0)
    }

    const color = colors[lastRandomColor];
    const newPlayer: Player = { name: playerName, color }
    setPlayersList([...playersList, newPlayer])
  }

  function deletePlayer(index: number) {
    const copyPlayersList = Array.from(playersList)
    copyPlayersList.splice(index, 1)
    setPlayersList(copyPlayersList)
  }

  return (
    <Container>
      <Head>
        <title>Mimicando | Home</title>
      </Head>
      <Header />

      <div className="data_settings_container">
        <Settings>
          <div className="time_settings">
            <p>Tempo(minutos):</p>
            <input
              type="text"
              value={initialValue}
              onChange={e => setInitialValue(Number(e.target.value))}
            />
          </div>

          <div className="insert_player">
            <h1>Inserir jogador</h1>

            <div>
              <p>Nome: </p>
              <input
                type="text"
                onChange={e => setPlayerName(e.target.value)}
              />
            </div>
            <button type="button" onClick={insertPlayer}>
              Adicionar
            </button>
          </div>
        </Settings>

        <Countdown>
          <div>
            <div>
              <span>{minuteLeft}</span>
              <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
              <span>{secondLeft}</span>
              <span>{secondRight}</span>
            </div>
          </div>

          {hasFinished ? (
            <ResetCountdownButton
              type="button"
              className="reset_countdow_button"
              onClick={resetCountdown}
            >
              Zerar
            </ResetCountdownButton>
          ) : (
              <>
                {isCountdownActive ? (
                  <StopCountdownButton
                    type="button"
                    onClick={resetCountdown}
                  >
                    Parar
                  </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                      type="button"
                      onClick={startCountdown}
                    >
                      Start!
                    </StartCountdownButton>
                  )
                }
              </>
            )
          }
        </Countdown>
      </div>

      {playersList.length > 0 ? (
        <PlayersDisplay>
          {playersList.map((player, index) => (
            <PlayerCard key={index} name={player.name} color={player.color}>
              <button
                type="button"
                className="close_button"
                onClick={e => deletePlayer(index)}
              >
                <img src="icons/close.png" alt="Fechar" />
              </button>
            </PlayerCard>
          ))}
        </PlayersDisplay>
      ) : (
          <h1 style={{ marginTop: '2rem' }}>Adicione algum jogador ^_^</h1>
        )}
    </Container>
  )
}

export default Home;
