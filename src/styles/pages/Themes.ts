import styled from "styled-components";

export const ThemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  .message {
    margin: 1.25rem 0;
    max-width: 20rem;
    h3 {
      text-align: center;
    }
  }

  .email_container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.25rem;
    input {
      height: 2rem;
      justify-content: center;

      width: 15rem;

      font-family: 'Roboto';

      border: 0;
      border-radius: 20px;
      padding-left: 10px;

      background: #CDD7F1;
      color: ${props => props.theme.colors.title};
    }

    label {
      margin-right: 20px;
    }

    .message_erro {
      position: absolute;

      padding: 0.05rem 0.2rem;

      bottom: -0.65rem;
      right: 0.65rem;
      font-weight: 600;

      border: 1px solid rgba(0, 0, 0, 0.2);

      border-radius: 10px;
      background: ${props => props.theme.colors.background};

      font-size: 0.7rem;

    }
  }

  .message_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    label {
      margin-bottom: 0.8rem;
    }

    textarea {
      border: 0;
      border-radius: 20px;
      padding-left: 10px;

      background: #CDD7F1;
      color: ${props => props.theme.colors.title};

      font-family: 'Roboto';

      padding: 0.5rem;
    }
  }

  .button_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      border: 0;
      border-radius: 5px;
      height: 50px;
      width: 50%;


      margin-top: 1rem;
      color: #fff;
      background: ${props => props.theme.colors.green};

      font-weight: 600;

      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(90%);
    }
  }
`
