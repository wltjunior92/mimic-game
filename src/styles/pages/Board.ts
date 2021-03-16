import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .data_settings_container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    .sorting_settings_container {
      margin-left: 5rem;

      .sorting_settings {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export const AddPlayerContainer = styled.div`
  margin-top: 1.25rem;

  form {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    width: auto;
  }

  input {
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    height: 54px;
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

  }

  button {
    border: 0;
    border-radius: 5px;
    background: ${props => props.theme.colors.lightGreen};
    height: 54px;
    width: 75px;

    transition: background-color 0.2s;

    :hover {
      background: ${props => props.theme.colors.green};
    }
  }
`

export const SortTypeButton = styled.div<{ isSorting: boolean }>`
  margin-top: 1rem;
  background-image: url("tv_image.png");
  width: 282px;
  height: 176px;

  button {

     ${props =>
    props.isSorting ? 'background-image: url("chuvisco.gif"); background-size: 242px 152px;' :
      'background: #131313;'}


    border-radius: 50px;
    border: 0;
    width: 242px;
    height: 152px;
    margin-left: 10.5px;
    margin-top: 12px;

    color: #f5f5f5;
  }
`

export const PlayersDisplay = styled.div`
  height: auto;
  width: fit-content;
  max-width: 700px;
  padding: 0.4rem;
  margin: 1.5rem 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: #616161;
`
