import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 42rem;
  margin-top: 3rem;
  text-align: justify;

  line-height: 1.5rem;

  header {
    h2 {
      text-align: center;
      margin: 2rem 0;
    }

    h3 {
      margin: 4rem 0;
      text-align: center;
    }
  }

  main {
    h2 {
      margin: 1.25rem 0 1.25rem 2rem;
    }

    >h3 {
      margin: 3rem 0;
      text-align: center;
    }

    h4 {
      margin-left: 2rem;
    }

    ul {
      h2 {
        margin: 3rem 0;
        text-align: center;
      }

      li {
        list-style-type: none;
        margin: 1rem 0;

        h3 {
          margin-left: 2rem;
        }

        p {
          margin-top: 1rem;
        }
      }
    }
  }

  footer {
    margin-bottom: 5rem;

    h3 {
      margin-bottom: 1rem;
    }
  }

  @media(max-width: 1000px) {
    padding: 0 2rem;
  }
`
