import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ::-webkit-scrollbar {
      display: none;
    }
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  button {
    cursor: pointer;
  }

  .container {
    display: flex;
    flex: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 90px;

    width: 100%;
    max-width: 900px;
  }

  .container .container_content {
    display: flex;
    flex-direction: row;
  }

  .ads {
    display: block;
    width: auto;
    height: auto;
  }

  @media(max-width: 1000px) {
    .container .container_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
