import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;


  h1 {
    color: ${props => props.theme.colors.title};
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
    color: ${props => props.theme.colors.subTitle};
    font-weight: 400;
  }

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.85rem;

    strong {
      color: ${props => props.theme.colors.orange};
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      div:first-child {
        margin-right: 8rem;
      }

      div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        background-image: url("cont_img.png");
        width: 428px;
        height: 207px;

        margin: 2rem 3rem;

        h2 {
          color: ${props => props.theme.colors.title};
          font-weight: 400;
        }
      }
    }
    img {
      height: 35rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const ContentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 5rem 0 0;
  }

  p {
    margin-bottom: 0.8rem;
    width: 25rem;
  }

  div {
    padding: 5px 1rem;
  }

  .only_text {
    display: flex;
    align-items: flex-start;

    div {
      h1 {
        padding: 10px 0;
      }
    }
  }
`
