import Head from 'next/head'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Container, Countdown, Settings, StartCountdownButton, StopCountdownButton, ResetCountdownButton } from '../styles/pages/Home';

let countdownTimeout: NodeJS.Timeout;

const Home: React.FC = () => {
  const [initialValue, setInitialValue] = useState(0);
  const [time, setTime] = useState(0);
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

  return (
    <Container>
      <Head>
        <title>Mimicando | Home</title>
      </Head>
      <Header />

      <div className="data_settings_container">
        <Settings>
          <div>
            <p>Tempo(minutos):</p>
            <input
              type="text"
              value="0"
              onChange={e => setInitialValue(Number(e.target.value))}
            />
          </div>

          <button type="button">
            Adicionar jogador
          </button>
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
    </Container>
  )
}

export default Home;
