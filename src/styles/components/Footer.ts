import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;

  right: 0;

  height: 123px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  img {
    width: 12rem;
  }

  @media(max-width: 1000px) {
    bottom: -93vw;
  }
`
