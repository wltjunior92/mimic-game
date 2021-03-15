import { useEffect, useState } from 'react';
import Header from '../components/Header';
import PlayerCard from '../components/PlayerCard';
import SEO from '../components/SEO';
import TextContentContainer from '../components/TextContentContainer';
import {
  Container,
  Countdown,
  Settings,
  StartCountdownButton,
  StopCountdownButton,
  ResetCountdownButton,
  PlayersDisplay
} from '../styles/pages/Board';

interface Player {
  id: string;
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
      new Audio('/notification.mp3').play();
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
    const id = (new Date()).valueOf().toString()
    const newPlayer: Player = { id, name: playerName, color }
    setPlayersList([...playersList, newPlayer])
  }

  function deletePlayer(id: string) {
    const index = playersList.findIndex(player => player.id === id)
    const copyPlayersList = Array.from(playersList)
    copyPlayersList.splice(index, 1)
    setPlayersList(copyPlayersList)
  }

  return (
    <Container>
      <SEO
        title="Mimic Fácil, a melhor e mais fácil maneira de se divertir!"
        image="logo_small.svg"
        shouldExcludeTitleSuffix
      />

      <div className="data_settings_container">
        <Settings>
          <div className="time_settings">
            <h3>Quanto tempo para <br /> cada jogador?</h3>
            <div>
              <label>Tempo(minutos):</label>
              <input
                type="text"
                placeholder="0"
                onChange={e => setInitialValue(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="insert_player">
            <h3>Inserir jogador ou equipe</h3>

            <div>
              <label>Nome: </label>
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
              Reiniciar
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
        <h1 className="add_players_message">Adicione algum jogador 😛</h1>
      )}

      <footer>
        <TextContentContainer>
          <header>
            <p>
              <strong>Mimic Fácil</strong> é a maneira mais fácil e rápida de jogar o famoso Jogo
              de Mímica com seus amigos. Inspirado nos modelos mais famosos (imagem & Ação, Jogo de
              Mímica, Mimicando, Imitatrix, etc), o Mimic Fácil é um <strong>jogo de mímica online
              completamente gratuito e de fácil acesso!</strong>
            </p>
            <h3>
              Você não precisa baixar nada e nem se preocupar com cadastros!<br />Basta acessa e jogar
              da forma que achar mais divertida!
            </h3>
          </header>

          <main>
            <h2>Sujestão de como jogar</h2>
            <p>
              O <strong>Mimic Fácil</strong> possui duas páginas que podem ser usadas no jogo,
              <strong>o tabuleiro</strong> onde serão inseridas as equipes ou jogadores, e a
              <strong>página de cartas</strong> onde você pode sortear os
              desafios de acordo com os temas e tipos selecionados.
            </p>
            <h3>Recomenda-se que o site seja acessado através<br />de pelo menos 2 dispositivos</h3>
            <h4>Exemplo</h4>
            <p>
              Um notebook ou smartphone acessa a página do tabuleiro enquanto
              um outro smartphone acessa as cartas.
            </p>
            <p>
              Enquanto um gerencia o tempo e adiciona os pontos das equipes o outro é usado pelo
              jogador que irá realizar as mímicas para sortear os desafios!
            </p>
            <ul>
              <h2>
                O Mimic Fácil pode ser jogado em equipe ou cada um por si!
              </h2>
              <li>
                <h3>Equipes</h3>
                <p>
                  Adicione as equipes e uma equipe joga por vêz. Durante sua rodada, a equipe manda
                  um jogador para interpretar as mímicas. O jogador da vêz precisa sortear uma carta
                  e tentar fazer o máximo de itens da carta no período de tempo estabelecido!
                </p>
              </li>
              <li>
                <h3>Cada um por si</h3>
                <p>
                  Cada jogador será adicionado na partida e irão revezar entre si para interpretar as
                  mímicas. Enquanto um jogador gerencia o tabuleiro distribuíndo os pontos, o jogador
                  da vez deve conseguir interpretar o máximo de itens sorteados na página de cartas
                  no tempo estabelecido.
                </p>
              </li>
            </ul>
          </main>

          <footer>
            <h3>
              Atualizações!
            </h3>
            <p>
              Já está sendo desenvolvida uma versão 2.0 do Mimic Fácil que contará com um <strong>novo
              layout mais moderno</strong> e <strong>melhorias de performance!</strong>
            </p>
          </footer>
        </TextContentContainer>
      </footer>
    </Container>
  )
}

export default Home;
