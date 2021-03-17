import styled from "styled-components";

export const ItemContainer = styled.button<{ isChecked?: boolean }>`
  overflow: hidden;
  width: 100%;
  height: 3rem;

  border: 0;
  border-radius: 5px;

  display: flex;
  justify-content: right;
  align-items: center;

  background: ${props => props.isChecked ? props.theme.colors.green : props.theme.colors.orange};

  color: ${props => props.isChecked ? '#222222' : '#000000'};

  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;

    border-radius: 5px;

    margin-left: 10px;

    background: #DBDADA;
  }

  h4 {
    margin-left: 10px;
  }
`
