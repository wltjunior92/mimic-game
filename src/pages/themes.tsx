import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import { ThemesContainer } from "../styles/pages/Themes";
import axios from 'axios';

import { sendSugestionSchema } from '../validations/SendSugestionValidation'

export default function Cards() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hasSendedMessage, setHasSendedMessage] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(null)

  useEffect(() => {
    setHasSendedMessage(false)
    setIsEmailValid(null)
  }, [email])

  async function handleSendThemeSugestion(e: FormEvent) {
    e.preventDefault();

    let formData = {
      email,
      message
    }

    const isValid = await sendSugestionSchema.isValid(formData)

    if (!isValid) {
      setIsEmailValid(false)
      return
    }

    await axios.post('/api/send', { email, message })

    console.log({ email, message })
    setEmail('')
    setMessage('')
    setHasSendedMessage(true)
    setIsEmailValid(true)
  }

  return (
    <div>
      <Head>
        <title>Mimic Fácil | Temas</title>
      </Head>
      <Header />

      <ThemesContainer>
        {hasSendedMessage && (
          <div className="message">
            <h3>Obrigado por nos enviar sua sugestão de tema 🎉🎊</h3>
          </div>
        )}
        <form onSubmit={handleSendThemeSugestion}>
          <div className="email_container">
            {isEmailValid === false && (
              <div className="message_erro">
                Por favor, digite um email válido 🤔
              </div>
            )}
            <label htmlFor="email">Email: *</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="message_container">
            <label htmlFor="message">Descreva sua sugestão de tema:</label>
            <textarea
              id="message"
              cols={40}
              rows={8}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="button_container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </ThemesContainer>

    </div>
  )
}
