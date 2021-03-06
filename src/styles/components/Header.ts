import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: flex-end;
  justify-content: space-between;

  padding: 10px;

  img {
    height: 100px;
  }

  .buttons {
    margin-left: 8rem;
    margin-right: 2rem;
  }

  button {
    border: 0;
    background-color: ${props => props.theme.colors.background};

    color: ${props => props.theme.colors.title};
    font-weight: 600;

    padding: 15px 40px;
    cursor: pointer;

    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #C5DCBB;
  }

  .buttons button:first-child {
    border-right: solid 1px #50765C;
    border-radius: 5px 0 0 5px;
  }

  .buttons button:last-child {
    border-left: solid 1px #50765C;
    border-radius: 0 5px 5px 0;
  }

  @media(max-width: 1000px) {
    .buttons {
      margin: 0;
      margin-top: 1.25rem;
      flex-wrap: initial;
    }

    .buttons button {
      padding: 15px 20px;
    }
  }

  @media(max-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`
