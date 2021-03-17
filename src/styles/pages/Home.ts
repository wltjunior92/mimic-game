import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 900px;

  @media(max-width: 1000px) {
    max-width: 95vw;
  }

  h1 {
    color: ${props => props.theme.colors.title};
    margin-bottom: 2rem;

    @media(max-width: 1000px) {
      font-size: 1.6rem;
      max-width: 90vw;

      text-align: center;
    }
  }

  h3 {
    text-align: center;
    color: ${props => props.theme.colors.subTitle};
    font-weight: 400;

    @media(max-width: 1000px) {
      font-size: 1rem;
      max-width: 80vw;
    }
  }

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.85rem;

    strong {
      color: ${props => props.theme.colors.orange};
    }

    @media(max-width: 1000px) {
      max-width: 95vw;
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    div {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;


      div:first-child {
        margin-right: 4rem;

        @media(max-width: 1000px) {
          margin-right: 0;
        }
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

        @media(max-width: 1000px) {
          margin: 2rem 0;
        }
      }

      @media(max-width: 1000px) {
        max-width: 100%;
        text-align: center;
        align-items: center;
      }
    }

    img {
      width:28rem;

      @media(max-width: 1000px) {
        width: 80vw;
      }
    }

    .ads {
      display: flex;
      align-items: center;
      justify-content: center;

    }

    @media(max-width: 1000px) {
      flex-direction: column-reverse;
      max-width: 95vw;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 1000px) {
      flex-direction: column;
      max-width: 95vw;

      h1 {
        font-size: 1rem;
      }
    }
  }

  .warn_title {
    font-size: 3rem;

    @media(max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
`
interface ContentSectionProps {
  leftBorder?: string;
  rightBorder?: string;
  invert?: boolean;
  appearence?: 'obj' | 'act' | 'pers' | 'mix'
}

export const ContentSection = styled.section<ContentSectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 900px;

  p {
    margin-bottom: 0.8rem;
    width: auto;
    color: ${props => props.theme.colors.text};

    @media(max-width: 1000px) {
      text-align: center;
    }
  }

  h1 {
    color: ${props => props.theme.colors.title};
  }

  div {
    padding: 5px 1rem;
    ${props => props.leftBorder !== '' && 'border-left: 12px solid' + props.leftBorder + ';'}
    ${props => props.rightBorder !== '' && 'border-right: 12px solid' + props.rightBorder + ';'}

    ${props => props.appearence === 'obj' &&
    'max-width: 20rem;' +
    'margin-right: 6rem;'}

    ${props => props.appearence === 'act' &&
    'max-width: 30rem;' +
    'margin-left: 6rem;'}

    ${props => props.appearence === 'pers' &&
    'max-width: 20rem;' +
    'margin-right: 6rem;'}

    ${props => props.appearence === 'mix' &&
    'max-width: 30rem;' +
    'margin-left: 6rem;'}

    h1 {
      @media(max-width: 1000px) {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column-reverse;

        .line_style {
          padding-bottom: 15px;
        }
      }
    }

    .line_style {
      ${props => props.appearence === 'obj' &&
    'width: 45px; border-bottom: 2px solid #3BC552; margin-bottom: 10px;'}
      ${props => props.appearence === 'act' &&
    'width: 45px; border-bottom: 2px solid #D42828; margin-bottom: 10px; margin-left: 0;'}
      ${props => props.appearence === 'pers' &&
    'width: 45px; border-bottom: 2px solid #EE861E; margin-bottom: 10px;'}
      ${props => props.appearence === 'mix' &&
    'padding: 0;'}

      img {
        width: 45px;
      }
    }

    @media(max-width: 1000px) {
      border-left: 0;
      border-right: 0;
      padding: 0;
      ${props => (props.appearence === 'obj' || props.appearence === 'act' || props.appearence === 'mix' || props.appearence === 'pers') &&
    'padding: 0;'}

      ${props => props.appearence === 'obj' &&
    'max-width: 80vw;' +
    'margin-right: 0;'}

      ${props => props.appearence === 'act' &&
    'width: 80vw;' +
    'margin-left: 0;'}

      ${props => props.appearence === 'pers' &&
    'max-width: 80vw;' +
    'margin-right: 0;'}

      ${props => props.appearence === 'mix' &&
    'width: 80vw;' +
    'margin-left: 0;'}
    }
  }

  .only_text {
    display: flex;
    align-items: flex-start;

    div {
      align-items: center;
      justify-content: center;

      h1 {
        padding: 10px 0;
      }
    }

    .text_left {
      margin-right: 3rem;

      @media(max-width: 1000px) {
        margin-right: 0;
      }
    }

    .text_right {
      margin-left: 3rem;

      @media(max-width: 1000px) {
        margin-left: 0;
      }
    }

    @media(max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    @media(max-width: 1000px) {
      ${props => (props.appearence === 'obj' || props.appearence === 'act' || props.appearence === 'mix' || props.appearence === 'pers') &&
    'width: 55vw;'
  }
    }
  }

  .illustra {
    @media(max-width: 1000px) {
      width: 90vw;
    }
  }

  @media(max-width: 1000px) {
  margin-bottom: 1rem;

  ${props => props.invert ? 'flex-direction: column;' : 'flex-direction: column-reverse;'}
  ${props => (props.appearence === 'obj' || props.appearence === 'act' || props.appearence === 'mix' || props.appearence === 'pers') &&
    'max-width: 90vw;'
  }
  }
`
