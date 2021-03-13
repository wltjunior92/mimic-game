import styled from "styled-components";

export const Container = styled.div<{ background: string }>`
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 0.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  background: ${props => props.background};

  margin: 0.4rem;

  border-radius: 5px;

  min-width: 7.5rem;

  h4 {
    font-weight: 400;
    padding: 0.25rem;
    border-bottom: solid 1px #fff;
  }

  strong {
    font-size: 3rem;
  }

  footer {
    border-top: solid 1px #fff;
    padding: 0.25rem 0;


    button {
      border: 0;
      border-radius: 5px;

      width: 2.8rem;

      color: #fff;
      padding: 0.5rem;

      font-size: 1.5rem;

      :first-child {
        margin-right: 5px;
        background: ${props => props.theme.colors.green}
      }

      :last-child {
        margin-left: 5px;
        background: ${props => props.theme.colors.red}
      }
    }
  }

  .close_button {
    position: absolute;
    padding: 0.25rem;
    background: transparent;
    font-size: 0;
    top: 0rem;
    right: 0rem;
    border: 0;
  }
`
