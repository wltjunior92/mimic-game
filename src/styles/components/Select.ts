import styled from "styled-components";


export const Select = styled.select`
  border: 1px solid #9E9E9E;
  border-radius: 5px;
  height: 40px;
  width: 17rem;

  background-color: transparent;

  padding: 0 10px;

  color: #9E9E9E;

  transition: border-color 0.2s;

  :hover {
    border: 1px solid #e0e0e0;
  }

  option {
    background: #424242;

    font-size: 1rem;
  }
`
