import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  & > .search_t {
    background-color: #ffffff;
    border: 1px solid #2a2c35;
    box-shadow: 0px 2px 0px #2a2c35;
    border-radius: 10px;
    padding: 18px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .search_icon {
      width: 20px;
      height: 20px;
    }
    & .search_input {
      font-family: 'Golos' !important;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #2a2c35;
      background-color: #ffffff;
      border: 0;
      width: 100%;
      margin-left: 14px;
      @media (max-width: 750px) {
        min-width: 400px;
      }
      @media (max-width: 550px) {
        min-width: 300px;
      }
      @media (max-width: 450px) {
        min-width: 200px;
      }
    }
    & #search {
      height: 21px;
    }
    & #search:focus::-webkit-input-placeholder {
      color: #cfd2d8;
    }
    & #search::-webkit-search-cancel-button {
      width: 26px;
      height: 21px;
      -webkit-appearance: none;
      appearance: none;
      background-image: url('/img/close-circle-search.svg');
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center;
      /* outline: 0; */
    }
  }
`;
