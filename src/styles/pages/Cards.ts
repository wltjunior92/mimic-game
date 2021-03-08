import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex: 1;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 1.5rem;

  @media(max-width: 1000px) {
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
  align-items: center;

  margin-right: 1.5rem;

  .combobox_container, .quantity_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 0.8rem;
    margin: 5px 0;
    width: 20rem;

    p {
      margin-right: 20px;
    }
  }

  .combobox_container {
    select {
      height: 2rem;
      justify-content: center;

      width: 8rem;

      border: 0;
      border-radius: 20px;
      padding-left: 10px;

      background: #CDD7F1;
      color: ${props => props.theme.colors.title};
    }
  }

  .quantity_container {
    input {
      height: 2rem;
      justify-content: center;

      width: 8rem;

      border: 0;
      border-radius: 20px;
      padding-left: 10px;

      background: #CDD7F1;
      color: ${props => props.theme.colors.title};
    }
  }

  button {
    border: 0;
    background: ${props => props.theme.colors.yellow};
    color: #fff;
    border-radius: 5px;
    margin-top: 1.25rem;

    height: 3rem;
    font-size: 1.25rem;
    width: 70%;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }

  @media(max-width: 1000px) {
    margin: 0 0 1.25rem 0;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

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
