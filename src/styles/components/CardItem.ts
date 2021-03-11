import styled from "styled-components";

export const ItemContainer = styled.button<{ isChecked?: boolean }>`
  overflow: hidden;
  width: 17rem;
  height: 3rem;

  border: 0;
  border-radius: 5px;

  display: flex;
  justify-content: right;
  align-items: center;

  background: ${props => props.isChecked ? '#86FA73' : '#FFF069'};

  color: ${props => props.isChecked ? '#222222' : '#000000'};

  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};

  div {
    height: 3rem;
    width: 3rem;

    margin-right: 1.5rem;

    background: #DBDADA;
  }
`
