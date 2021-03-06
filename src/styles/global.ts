import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font:  400 16px Roboto, sans-serif;

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

    width: fill-available;

    max-width: 1100px;
  }

  .container .container_content {
    display: flex;
    flex-direction: row;
  }

  .ads {
    display: block;
    border: solid 1px #000;
    background: #d0d0d0;
    width: 160px;
    height: 60px;
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
