import styled from "styled-components";

export const HeaderContainer = styled.div<{ openMenu: boolean }>`
  position: fixed;

  z-index: 1;

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

    padding: 0 1rem;

    max-width: 1300px;

    >a {
      font-size: 0;
      img {
        height: 80px;

        @media(max-width: 1000px) {
          height: 60px;
        }
      }
    }

    .normal_buttons {
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

        @media(max-width: 1000px) {
          font-size: 1rem;
        }
      }
    }

    @media(max-width: 1000px) {
      .normal_buttons {
        display: none;
      }
    }

    button {
      position: relative;
      border: 0;
      background: transparent;

      .paper {
        overflow: hidden;
        position: absolute;
        ${props => !props.openMenu ? 'display: none;' : ''}
        z-index: -1;
        left: -150px;
        top: 40px;
        background: #FAFAFA;
        border-radius: 0 0 20px 20px;

        .slide_buttons {
          display: flex;
          flex-direction: column;
          li {
            list-style: none;

            font-size: 1.5rem;

            a {
              display: block;
              text-decoration: none;
              color: #616161;

              padding: 1.57rem 4rem;

              border-bottom: 1px solid #9e9e9e;
              border-top: 1px solid #9e9e9e;

              transition: background-color 0.2s;
              transition: color 0.2s;
            }

            @media(max-width: 1000px) {
              font-size: 1rem;
            }
          }
        }
      }

      @media(min-width: 1000px) {
        display: none;
      }
    }
  }
`
