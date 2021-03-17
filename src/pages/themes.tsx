import { FormEvent, useEffect, useState } from "react";
import { ContentContainer, ThemesContainer } from "../styles/pages/Themes";
import axios from 'axios';

import { sendSugestionSchema } from '../validations/SendSugestionValidation'
import SEO from "../components/SEO";
import { Input } from "../styles/components/Input";

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

    setEmail('')
    setMessage('')
    setHasSendedMessage(true)
    setIsEmailValid(true)
  }

  return (
    <>
      <ThemesContainer>
        <SEO
          title="Sugestão de temas"
          description="Envie-nos sugestões de temas"
          image="logo_small.svg"
        />

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
              <Input
                id="email"
                style={{ marginRight: 0 }}
                placeholder="Email..."
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="message_container">
              <textarea
                id="message"
                placeholder="Mensagem..."
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

        <div className="text_container" style={{ marginTop: '0.8rem' }}>
          <h1
            style={{
              color: '#f5f5f5',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            Envie-nos sugestões de temas!
          </h1>
          <p style={{ marginBottom: '1rem' }}>
            A equipe responsável pelo Mimic Fácil se importa, sobretudo, em proporcionar a
            experiência mais divertida e memorável para os jogadores, por isso nos disponibilizamos
            a receber sugestões de novos temas que possam agradar nossa comunidade de jogadores.
          </p>
          <p>
            Como sabemos que não somos imunes a falhas, fique à vontade também para nos informar
            sobre bugs e sugerir alterações e melhorias no nosso site.
          </p>

        </div>
      </ThemesContainer>
      <h1
        style={{
          color: '#f5f5f5',
          fontSize: '1.5rem',
          margin: '3.5rem 0',
          textAlign: 'center'
        }}
      >
        A equipe Mimic Fácil agradece muito<br />
        a sua colaboração!
      </h1>
    </>
  )
}
