import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #9E9E9E;
  border-radius: 5px;
  height: 40px;
  width: 100%;

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
`
