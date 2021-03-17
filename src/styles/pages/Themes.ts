import styled from "styled-components";

export const ThemesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin-left: 18px;
  }

  .text_container {
    max-width: 25rem;

    @media(max-width: 1000px) {
      text-align: center;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 4rem;

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

    .message_erro {
      position: absolute;

      padding: 0.05rem 0.2rem;

      bottom: -0.45rem;
      right: 0.65rem;
      font-weight: 400;

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
      border: 1px solid #9E9E9E;
      border-radius: 5px;
      width: 100%;

      background-color: transparent;
      font-family: 'Roboto';

      padding-left: 10px;

      color: #eeeeee;

      transition: border-color 0.2s;

      :hover {
        border: 1px solid #e0e0e0;
        ::placeholder {
          color: #bdbdbd;
        }
      }
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
      width: 100%;

      margin-top: 1rem;
      color: #eeeeee;
      background: ${props => props.theme.colors.lightGreen};

      font-weight: 600;

      transition: filter 0.2s;
    }

    button:hover {
      background: ${props => props.theme.colors.green};
    }
  }

  @media(max-width: 1000px) {
    margin-right: 0;
  }
`
