import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;

  right: 0;
  width: 100vw;
  background: #FAFAFA;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    padding: 0 1rem;

    max-width: 1300px;

    >a {
      font-size: 0;
      img {
        height: 80px;
      }
    }

    ul {
      display: flex;
      li {
        list-style: none;

        font-size: 1.5rem;

        a {
          display: block;
          text-decoration: none;
          color: #616161;

          padding: 1.57rem 2rem;

          transition: background-color 0.2s;
          transition: color 0.2s;

          :hover {
            color: #fafafa;
            background: #bdbdbd;
          }
        }
      }
    }
  }

`
