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
    position: relative;
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
    width: auto;
    height: auto;
  }

  .ad_top {
    display: flex;

    @media(max-width: 800px) {
      display: none;
    }
  }

  .ad_left {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 1%;
    top: 100px;

    >div{
      position: relative;

      .upper {
        position: absolute;
      }
      .down {
        position: absolute;
        top: 251px;
      }
    }

    @media(max-width: 800px) {
      display: none;
    }
  }

  .ad_right {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 15%;
    top: 100px;
    z-index: 1;

    >div{
      position: relative;

      .upper {
        position: absolute;
      }
      .down {
        position: absolute;
        top: 251px;
      }
    }

    @media(max-width: 800px) {
      display: none;
    }
  }

  @media(max-width: 1000px) {
    .container .container_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
