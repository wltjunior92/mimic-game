import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 900px;

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

    width: fit-content;

    div {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      div:first-child {
        margin-right: 4rem;
      }

      div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        background-image: url("cont_img.png");
        background-size: 300px auto;
        background-repeat: no-repeat;
        width: 300px;
        height: 145px;

        margin: 2rem 3rem;

        h2 {
          color: ${props => props.theme.colors.title};
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }

    img {
      height: 20rem;
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

  max-width: 900px;

  p {
    margin-bottom: 0.8rem;
    width: auto;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    color: ${props => props.theme.colors.title}
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
