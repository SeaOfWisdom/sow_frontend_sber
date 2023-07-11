import styled from "styled-components";

const UiTable = styled.div`
@media (max-width:900px) {
  display: none;
  
}
  & .tableContainer {
    & thead {
      & tr {
        & th {
          color: #847f99;
          font-weight: 500;
          font-size: 14px;
          cursor: auto;
        }
      }
      & .CheckboxTarget {
        width: 50px;
      }
    }
    & tbody {
      /* &:nth-child(even) {background-color: #F4F6F9;} */
    }
    & tr {
      /* background-color: #F4F6F9; */
      font-family: "Golos";

      cursor: pointer;
      /* &:nth-child(even) {background-color: #ffffff;} */
      /* &:hover{
                background-color: #f9f6f4;
            } */
      /* & .end_th {
        display: flex;
        justify-content: space-between;
        & .th_text {
          margin-right: 24px;
        }
        & .pushPin {
          display: flex;
          width: 50px;
          justify-content: center;
          align-items: center;
          margin: -18px -15px;
          padding: 8px 12.5px;
          border-left: 1px solid #eeeeee;
          cursor: pointer;

          & img {
            width: 24px;
            height: 24px;
          }
        }
      } */
    }
    /* & .author-detail-tr {
      & th {
        font-weight: 600;
        font-size: 16px;
        font-family: "Lora" !important;
        color: #2a2c35;
        text-transform: auto;
      }
    } */
    & .article-detail-tr__head {
      & th {
        padding-top: 24px;
        padding-bottom: 24px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        /* max-width: 155px; */
        font-family: "Lora";
        letter-spacing: inherit;
        color: #2a2c35;
        text-transform: auto;
        white-space: pre;
        :nth-child(1) {
          padding-left: 0;
        }
      }
    }
    & .article-detail-tr__body {
      & td {
        padding-top: 24px;
        padding-bottom: 24px;
        line-height: 170%;
        font-family: "Golos";
        :nth-child(1) {
          padding-left: 0;
        }
        & div {
          display: flex;
          justify-content: center;
          & img {
            margin: 0;
          }
        }
      }
    }
    & th {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #2a2c35;
      border-top: 1px solid #e8e5e0;
      border-bottom: 1px solid #e8e5e0;
      text-transform: none;
      font-family: "Golos";
      padding: 16px;
      /* max-width: 200px; */
      /* white-space: pre; */
      height: auto;
      /* :nth-child(1){
       text-align: center;
      } */
    }
    & .number-id {
      text-align: center;
      /* padding-left: 0; */
      padding-left: 24px;
    }
    & td {
      font-family: "Golos";
      padding: 14px;
      font-size: 14px;
      text-transform: none;
      max-width: 200px;
      white-space: pre;
      line-height: 150%;
      cursor: auto;
      height: auto;
      :nth-child(1) {
        white-space: break-spaces;
      }
      :nth-child(2) {
        white-space: break-spaces;
      }
      :last-child {
        padding-right: 24px;
      }
      span{
        font-family: 'Golos';
      }
      & .text_word{
        font-size: 14px;
      }
      & img {
        margin-right: 16px;
      }
      & .no-data {
        color: #847f99;
      }
      & .btn-table {
        font-family: "Golos";
        font-weight: 500;
        font-size: 14px;
        padding: 12px 16px;
        white-space: pre;
        border: 1px solid #2a2c35;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;

        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2a2c35;
        text-align: center;
        /* :hover{
         opacity: 0.5
        } */
      }
      & .actions {
        background: #f0f3f4;
      }
      & .publish-btn {
        background-color: #8be4d4;
      }
      & .view-btn {
        background: #ffffff;
      }
      & .review-sent {
        background: #8be4d4;
        opacity: 0.5;
      }
      & .actions:hover {
        opacity: 0.5;
      }
      & .status {
        border-radius: 100px;
        font-weight: 400;
        font-size: 14px;
        /* text-align: center; */
        font-family: "Golos";
        width: max-content;
        padding: 6px 12px;
      }
      & .published {
        color: #53c5b0;
        background: rgba(83, 197, 176, 0.1);
      }
      & .finish-publish {
        color: #53c5b0;
        background: rgba(83, 197, 176, 0.1);
      }
      & .orginal-review {
        background: rgba(242, 143, 51, 0.1);
        color: #f28f33;
      }
      & .under-consideration {
        color: #3e9cf3;
        background: rgba(62, 156, 243, 0.1);
      }
      & .article-publish {
        color: #847f99;
        background: rgba(132, 127, 153, 0.1);
      }
      & .rejected {
        color: #ff6a6a;
        background: rgba(255, 106, 106, 0.1);
      }
      &.reward, & .reward {
        font-weight: 500;
        font-size: 14px;
        font-family: "Golos";
      }
      & .validators {
        display: flex;
        position: relative;
        & .circle {
          background: #2a2c35;
          position: absolute;
          left: 50px;
          color: white;
          width: 36px;
          height: 36px;
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50%;
        }
        & img {
          :nth-child(2) {
            position: absolute;
            left: 25px;
          }
          :nth-child(3) {
            /* position: absolute;
            left: 50px; */
            z-index: 1;
          }
        }
      }
    }
    & .tabble_btns {
      margin: -7px;
      & > * {
        margin: 7px;
      }
    }
  }
`;
export default UiTable;
