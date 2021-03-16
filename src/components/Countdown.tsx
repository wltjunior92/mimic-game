import {
  CountdownContainer,
  CountdownTimer,
  StartCountdownButton,
  StopCountdownButton,
  ResetCountdownButton
} from "../styles/components/Countdown";
import { FormEvent, useEffect, useState } from 'react';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
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

  useEffect(() => {
    console.log(initialValue)
  }, [initialValue])

  function handleSetTime(event: FormEvent) {
    event.preventDefault()
    const value = String(event.target[0].value)

    if (value.match(/\D+/)) {
      alert('Apenas números')
      return
    }

    setInitialValue(Number(value))
  }

  return (
    <CountdownContainer>
      <form
        id="set_time_form"
        onSubmit={event => handleSetTime(event)}
      >
        <input type="text" placeholder="Minutos" />
        <button type="submit">
          <img src="icons/material-check.svg" />
        </button>
      </form>

      <CountdownTimer>
        <div>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span className="timer_divider">:</span>
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
      </CountdownTimer>
    </CountdownContainer>
  )
}
