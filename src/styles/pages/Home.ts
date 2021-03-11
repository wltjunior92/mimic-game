import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex: 1;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  .data_settings_container {
    display: flex;
    margin-top: 1rem;

    justify-content: center;
    width: 100%;
  }

  @media(max-width: 1000px) {
    .data_settings_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Settings = styled.div`
  height: 100%;
  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .time_settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 1.25rem;

      input {
        border: 0;
        background-color: #CDD7F1;
        padding: 0 1.8rem;
        max-width: 100px;
        height: 1.5rem;
        margin-left: 1rem;

        border-radius: 10px;
      }
    }
  }

  .insert_player {
    padding-top: 0.8rem;
    border-top: solid 1px #CDD7F1;
    margin-top: 1.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.8rem;
    }

    div {
      margin-top: 1rem;
      display: flex;
      flex: 1;

      input {
        border: 0;
        background-color: #CDD7F1;
        padding: 0 1.8rem;
        max-width: 140px;
        height: 1.5rem;
        margin-left: 1rem;

        border-radius: 10px;
      }
    }
    align-items: center;
    justify-content: center;
  }

  button {
    border: 0;
    border-radius: 5px;
    height: 50px;
    width: 70%;

    margin-top: 1.5rem;
    color: #fff;
    background: ${props => props.theme.colors.green};

    font-weight: 600;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(90%);
  }
`

export const Countdown = styled.div`
  height: 100%;
  padding: 0.8rem;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);

  span {
    font-size: 6.25rem;
    margin: 0 0.5rem;

  }

  > div{
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${props => props.theme.colors.title};


    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;


      background: #fff;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      font-size: 6.5rem;
      text-align: center;


      span {
        flex: 1;
        width: 3.5rem;
      }
    }
  }
  @media(max-width: 1000px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`

export const StartCountdownButton = styled.button`
  border: 0;
  border-radius: 5px;
  height: 50px;
  width: 70%;

  margin-top: 1.5rem;
  color: #fff;
  background: ${props => props.theme.colors.green};

  font-size: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`

export const StopCountdownButton = styled.button`
border: 0;
  border-radius: 5px;
  height: 50px;
  width: 70%;

  margin-top: 1.5rem;
  color: #fff;
  background: ${props => props.theme.colors.red};

  font-size: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  :hover {
    filter: brightness(80%);
  }
`

export const ResetCountdownButton = styled.button`
border: 0;
  border-radius: 5px;
  height: 50px;
  width: 70%;

  margin-top: 1.5rem;
  color: #fff;
  background: ${props => props.theme.colors.yellow};

  font-size: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`
export const PlayersDisplay = styled.div`
  height: auto;
  width: 92%;
  padding: 0.4rem;
  margin: 1.5rem 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  border-radius: 8px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
`
