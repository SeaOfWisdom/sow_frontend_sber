import styled from 'styled-components';

export const ValidatorAccountContainer = styled.div`
  & .title {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 28px;
  }
  & .diploma_target {
    background: #ffffff;
    /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05); */
    border-radius: 12px;
    padding: 48px 0px;
    /* margin-bottom: 8px; */
    & .head {
      display: flex;
      justify-content: space-between;

      align-items: center;
      padding-bottom: 16px;
      @media (max-width: 600px) {
        display: block;
      }
      & .title {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #2a2c35;
        margin-bottom: 0;
      }
      & > .bolt {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #2a2c35;
      }
    }
    & .desc {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #2a2c35;
    }
    & .file_input {
      background-color: rgba(42, 44, 53, 0.04);
      /* border: 1px dashed #2A2C35; */
      /* background-color: #F6F7F7; */
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%232A2C35FF' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 6px;
      padding: 65px 36px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 36px 0;
      cursor: pointer;
      & > img {
        width: 70px;
        height: 90px;
      }
      & .ftext1 {
        max-width: 374px;
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 180%;
        text-align: center;
        color: #2a2c35;
        padding: 24px 0 12px 0;
      }
      & .ftext2 {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #847f99;
        padding-bottom: 24px;
      }
      & > .btn {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        padding: 16px 24px;
        background: #2a2c35;
        opacity: 0.5;
        border-radius: 1000px;
        color: #ffffff;
        cursor: pointer;
      }
      & .file_input {
        display: none;
      }
    }
    & .image_err {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #ff6a6a;
      margin-top: 8px;
    }
    & .images {
      & .image {
        margin-bottom: 16px;
        background: #ffffff;
        border: 1px solid #cfd2d8;
        border-radius: 6px;
        padding: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :last-child {
          margin-bottom: 0px;
        }
        & .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          & .icon {
            padding-right: 20px;
            padding-left: 4px;
            & img {
              height: 36px;
              width: 28px;
            }
          }
          & .img_info {
            & .name {
              font-family: 'Lora';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              color: #2a2c35;
              padding-bottom: 4px;
            }
            & .size {
              font-family: 'Golos';
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              color: #847f99;
            }
          }
        }
        & .delete {
          & img {
            cursor: pointer;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    & .row {
      display: flex;
      & > .col {
        flex: 1;
        margin: 12px;
        & > .checkbox {
          display: flex;
          align-items: center;
          font-family: 'Golos';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #2a2c35;
          & > .check {
            margin-right: 14px;
          }
          & > span {
            font-family: 'Golos';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #ff6a6a;
            margin-left: 2px;
          }
          & > .bolt {
            font-family: 'Golos';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-decoration-line: underline;
            color: #2a2c35;
          }
        }
      }
    }
    & .row_check {
      margin-top: 24px;
      & > .col {
        margin: 0;
      }
    }
  }

  & > .title {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: #2a2c35;
    padding-bottom: 28px;
  }
  & .input_container {
    margin: -12px;
    & .row {
      display: flex;
      & > .col {
        flex: 1;
        margin: 12px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
    .save {
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 3px 0px #2a2c35;
      border-radius: 1000px;
      padding: 20px 24px;
      font-family: 'Golos';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #2a2c35;
    }
  }
`;
