import styled from "styled-components";

export const ThemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .message {
    margin: 1.25rem 0;
    max-width: 20rem;
    h3 {
      text-align: center;
    }
  }

  .email_container {
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
