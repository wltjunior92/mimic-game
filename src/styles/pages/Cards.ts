import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex: 1;
  width: 100%;


  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 1000px) {
    margin-bottom: 0;
  }

  .ad_hotmart {
    display: flex;
    img {
      height: 300px;
      width: 300px;
      @media(max-width: 800px) {
        height: 170px;
        width: 170px;
      }
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  @media(max-width: 1000px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  margin-right: 3rem;

  width: 272px;

  button {
    border: 0;
    background: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.title};
    border-radius: 5px;
    margin-top: 1.25rem;

    height: 3rem;
    font-size: 1.25rem;
    width: 100%;

    transition: filter 0.2s;

    :hover {
      background: ${props => props.theme.colors.blue};
    }
  }

  @media(max-width: 1000px) {
    align-items: stretch;
    width: 85vw;
    margin: 0;
    margin-bottom: 3rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;

  width: 320px;
  height: auto;

  background: #fff;

  padding: 0.8rem;
  border-radius: 8px;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);

  button:nth-child(n + 2) {
    margin-top: 7px;
  }

  @media(max-width: 1000px) {
    margin-bottom: 10px;
  }
`
