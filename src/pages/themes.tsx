import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import { ContentContainer, ThemesContainer } from "../styles/pages/Themes";
import axios from 'axios';

import { sendSugestionSchema } from '../validations/SendSugestionValidation'
import SEO from "../components/SEO";
import TextContentContainer from "../components/TextContentContainer";

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
    <ThemesContainer>
      <SEO
        title="Sugestão de temas"
        description="Envie-nos sugestões de temas"
        image="logo_small.svg"
      />
      <Header />

      <ContentContainer>
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
      </ContentContainer>
      <footer>
        <TextContentContainer>
          <main style={{ margin: '6rem 0 5rem 0' }}>
            <p style={{ marginBottom: '2rem' }}>
              A equipe responsável pelo <strong>Mimic Fácil</strong> se importa, sobretudo, em
              proporcionar a <strong>experiência mais divertida e memorável</strong> para os
              jogadores, por isso nos disponibilizamos a receber sugestões de novos temas que
              possam agradar nossa comunidade de jogadores.
            </p>
            <p>
              Como sabemos que não somos imunes a falhas, fique à vontade também para nos
              informar sobre bugs e sugerir alterações e melhorias no nosso site.
            </p>
            <h2 style={{
              textAlign: 'center',
              lineHeight: '2rem',
              marginTop: '5rem',
              marginLeft: '0'
            }}>
              A equipe Mimic Fácil agradece muito<br />a sua colaboração! 🎉
            </h2>
          </main>
        </TextContentContainer>
      </footer>

    </ThemesContainer>
  )
}
