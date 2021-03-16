import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  #set_time_form {
    display: flex;
    flex-wrap: nowrap;

    input {
      border: 1px solid #9E9E9E;
      border-radius: 5px;
      height: 40px;
      width: 50%;

      background-color: transparent;

      padding-left: 10px;
      margin-right: 10px;

      color: #eeeeee;

      transition: border-color 0.2s;

      :hover {
        border: 1px solid #e0e0e0;
        ::placeholder {
          color: #bdbdbd;
        }
      }

    }

    button {
      border: 0;
      border-radius: 5px;

      background: ${props => props.theme.colors.lightGreen};

      height: 40px;
      min-width: 40px;

      transition: background-color 0.2s;

      :hover {
        background: ${props => props.theme.colors.green};
      }
    }
  }
`

export const CountdownTimer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  .timer_divider {
    color: ${props => props.theme.colors.subTitle};
  }

  > div{
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${props => props.theme.colors.darkText};

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: #fff;
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
  width: 100%;

  margin-top: 1rem;
  color: #fff;
  background: ${props => props.theme.colors.lightGreen};

  font-size: 1.5rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :hover {
    background: ${props => props.theme.colors.green};
  }
`

export const StopCountdownButton = styled.button`
border: 0;
  border-radius: 5px;
  height: 50px;
  width: 100%;

  margin-top: 1rem;
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
  width: 100%;

  margin-top: 1rem;
  color: #fff;
  background: ${props => props.theme.colors.orange};

  font-size: 1.5rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :hover {
    background: ${props => props.theme.colors.darkOrange};
  }
`
