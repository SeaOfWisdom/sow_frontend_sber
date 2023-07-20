import styled from 'styled-components';

export const AuthorCreateContainer = styled.div`
  .authorcontainer {
    padding: 0px 36px;
    margin-bottom: 44px;
    & .review {
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #00002a;
      border-radius: 12px;
      padding: 50px 60px;
      background: white;
      margin-bottom: 24px;
      margin-top: 12px;
      @media (max-width: 900px) {
        padding: 24px;
        margin-top: 14px;
      }
      & .review-items {
        display: flex;
        align-items: center;

        & img {
          margin-right: 24px;
        }
        & .review-item {
          & h4 {
            font-family: 'Lora';
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            text-decoration-line: underline;
            margin-bottom: 12px;
          }
          & .authors {
            & span {
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;
              font-family: 'Golos';
              color: #5e4eda;
              :nth-child(1) {
                margin-right: 8px;
              }
              @media (max-width: 900px) {
                font-weight: 400;
                font-size: 14px;
                line-height: 160%;
              }
            }
          }
        }
        @media (max-width: 900px) {
          align-items: start;
          & .review-item {
            h4 {
              font-weight: 600;
              font-size: 16px;
              line-height: 150%;
            }
          }
        }
      }
    }
    & .table-review {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      background: #ffffff;
    }
    & .create {
      border-top: 1px solid #2a2c35;
      /* padding: 0px 36px; */
      @media (max-width: 900px) {
        border-top: none;
        margin-top: 14px;
      }
    }
    & .steps {
      margin-bottom: 16px;
      display: flex;
      overflow-x: scroll;
      gap: 16px;
      @media (max-width: 900px) {
        margin-top: 14px;
      }
      & .step {
        padding: 24px;
        display: flex;
        width: 100%;
        align-items: center;
        /* width: 330px; */
        align-items: start;
        border-radius: 8px;
        border-radius: 8px;
        /* margin-right: 16px; */
        @media (max-width: 1350px) {
          min-width: 330px;
        }
        @media (max-width: 600px) {
          min-width: 127px;
        }
        & img {
          margin-right: 10px;
          margin-top: 5px;
          @media (max-width: 600px) {
            margin-top: 0px;
          }
        }
        & .step-text {
          & span {
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #847f99;
            line-height: 150%;
            font-family: 'Golos';
            white-space: pre;
          }
          & p {
            font-family: 'Lora';
            font-weight: 600;
            font-size: 17px;
            @media (max-width: 600px) {
              display: none;
            }
          }
          .succsesstext {
            color: #2a2c35;
          }
          .activetext {
            color: #2a2c35;
          }
          .noactivetext {
            color: #847f99;
          }
        }
      }
      :nth-child(4) {
        margin-right: 0;
      }
      & .active {
        background: #ffffff;
        border-bottom: 4px solid #d890f0;
      }
      & .noactive {
        background: rgba(255, 255, 255, 0.7);
        border-bottom: 4px solid #cfd2d8;
      }
      & .success {
        border-bottom: 4px solid #8be4d4;
        background: #ffffff;
      }
    }
    & .steps-validator {
      margin-bottom: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
      gap: 16px;
      & .step {
        padding: 24px;
        display: flex;
        /* width: 330px; */
        align-items: start;
        border-radius: 8px;
        border-radius: 8px;
        /* margin-right: 16px; */
        & img {
          margin-right: 10px;
          margin-top: 5px;
        }
        & .step-text {
          & span {
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #847f99;
            line-height: 150%;
            font-family: 'Golos';
          }
          & p {
            font-family: 'Lora';
            font-weight: 600;
            font-size: 17px;
          }
          .succsesstext {
            color: #2a2c35;
          }
          .activetext {
            color: #2a2c35;
          }
          .noactivetext {
            color: #847f99;
          }
        }
      }
      :nth-child(4) {
        margin-right: 0;
      }
      & .active {
        background: #ffffff;
        border-bottom: 4px solid #d890f0;
      }
      & .noactive {
        background: rgba(255, 255, 255, 0.7);
        border-bottom: 4px solid #cfd2d8;
      }
      & .success {
        border-bottom: 4px solid #8be4d4;
        background: #ffffff;
      }
    }
    & .box-card {
      margin-bottom: 8px;
      margin-top: 8px;
      padding: 50px 60px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      background: white;
      @media (max-width: 900px) {
        padding: 24px 16px;
        margin-top: 16px;
      }
      & .images {
        margin-top: 36px;
        & .image {
          /* margin-bottom: 16px; */
          background: #ffffff;
          border: 1px solid #cfd2d8;
          border-radius: 6px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
      & .writing-text {
        & p {
          font-family: 'Golos';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;

          line-height: 32px;
          color: #2a2c35;
        }
        @media (max-width: 900px) {
          font-size: 16px;
          line-height: 150%;
        }
      }
      & .btns-writing {
        display: flex;
        margin-bottom: 16px;
        justify-content: space-between;
        align-items: center;
        & .btns-writing-items {
          display: flex;
          & .review-article {
            padding: 14px 25px;
            font-family: 'Golos';
            font-weight: 500;
            font-size: 14px;
            margin-left: 16px;
            line-height: 17px;
            color: #2a2c35;
            border: 1px solid #2a2c35;
            border-radius: 1000px;
          }
        }
        @media (max-width: 900px) {
          display: block;
          & .review-article {
            padding: 15px 24px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 12px;
          }
        }
      }
      & p {
        font-weight: 400;
        font-size: 16px;
        font-family: 'Golos';
        color: #2a2c35;
        line-height: 180%;
      }
      & .placement-title {
        display: flex;
        margin-bottom: 8px;
        & img {
          margin-right: 12px;
        }
        & h5 {
          font-weight: 500;
          font-size: 18px;
          color: #2a2c35;
          font-family: 'Golos';
        }
      }
      & .placement-text {
        color: #2a2c35;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Golos';
        line-height: 180%;
        margin-bottom: 24px;

        :nth-child(7) {
          margin-bottom: 0px;
        }
        @media (max-width: 900px) {
          font-size: 14px;
        }
      }
      h4 {
        font-family: 'Lora';
        font-weight: 600;
        font-size: 24px;
        @media (max-width: 900px) {
          font-size: 20px;
          line-height: 26px;
        }
      }
      & .input-target {
        margin-top: 24px;
        label {
          font-weight: 400;
          font-size: 14px;
          color: #2a2c35;
          font-family: 'Golos';
          & span {
            color: #ff6a6a;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
        & input {
          margin-top: 10px;
          height: 47px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
          font-family: 'Golos';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          &:disabled {
            background-color: #f0f3f4;
            color: #847f99;
          }
        }
        & span {
          font-family: Golos;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: rgb(255, 106, 106);
          margin-left: 2px;
        }
        & textarea {
          font-family: 'Golos';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          &:disabled {
            background-color: #f0f3f4;
            color: #847f99;
          }
        }
        & .textarea-annotation {
          margin-top: 10px;
          height: 135px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
        & .textarea-work_data {
          margin-top: 10px;
          height: 405px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
        & .textarea-writing-review {
          height: 473px;
        }
        & .textarea-comment {
          height: 135px;
        }
        & textarea {
          margin-top: 10px;

          outline: none;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
        :nth-child(2) {
          margin-top: 12px !important;
        }
      }
      & .input-target__validator {
        margin-top: 16px;
        label {
          font-weight: 400;
          font-size: 14px;
          color: #2a2c35;
          font-family: 'Golos';
          & span {
            color: #ff6a6a;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
        & input {
          margin-top: 10px;
          height: 47px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
        & .textarea-annotation {
          margin-top: 10px;
          height: 135px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
        & .textarea-writing-review {
          height: 473px;
        }
        & .textarea-comment {
          height: 135px;
        }
        & textarea {
          margin-top: 10px;
          outline: none;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
        }
      }
      & .internet-space {
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
        border-radius: 12px;
        border: 1px solid #000000;
        padding: 36px;
        margin-top: 36px;
        h2 {
          font-family: 'Lora';
          font-weight: 600;
          font-size: 32px;
          line-height: 160%;
          color: #2a2c35;
          @media (max-width: 900px) {
            font-size: 25px;
          }
        }
        & .author {
          display: flex;
          p {
            margin-right: 8px;
            color: #5e4eda;
            text-decoration-line: underline;
            margin-top: 12px;
          }
        }
        & .annotation {
          margin-top: 24px;
          & h2 {
            margin-bottom: 16px;
          }
          & p {
            & .tag {
              background-color: #f0f3f4;
              padding: 8px 16px;
              margin: 0 16px 16px 0;
              border-radius: 50px;
            }
          }
        }
        @media (max-width: 900px) {
          padding: 15px;
        }
      }
      & .upload-file {
        margin-top: 36px;
        /* border: 1px dashed #2a2c35; */
        border-radius: 6px;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%232A2C35FF' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e");
        background-color: rgba(42, 44, 53, 0.04);
        text-align: center;
        padding: 65px 0px 80px 0px;
        & .upload-file__p {
          text-align: center;
          display: flex;
          justify-content: center;
          & p {
            font-weight: 600;
            font-size: 18px;
            line-height: 180%;
            font-family: 'Lora';
            margin-bottom: 12px;
            width: 345px;
          }
        }
        & span {
          font-family: 'Golos';
          margin-bottom: 24px;
          font-weight: 400;
          font-size: 14px;
          display: block;
          line-height: 17px;
          color: #847f99;
        }
        & img {
          display: inline;
          margin-bottom: 24px;
        }
        & button {
          font-family: 'Golos';
          padding: 12px 24px;
          background: #2a2c35;
          border-radius: 1000px;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: white;
        }
      }
      & .add-author {
        display: flex;
        justify-content: space-between;
        & h4 {
          margin-bottom: 16px;
        }
        & .sms-btn {
          align-items: center;
          background: #2a2c35;
          border-radius: 1000px;
          height: 48px;
          & img {
            margin-right: 10px;
          }
          font-size: 14px;
          line-height: 17px;
          font-family: 'Golos';
          padding: 15px 25px;
          background: #2a2c35;
          color: white;
          display: flex;
        }
        & .sms-btn-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        @media (max-width: 900px) {
          display: block;
          & button {
            margin: 15px 0px;
          }
        }
      }
      & .add-btn {
        width: 100%;
        display: flex;
        text-align: center;
        /* border: 1px dashed #2a2c35; */
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%232A2C35FF' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e");
        border-radius: 6px;
        margin-top: 16px;
        background-color: rgba(42, 44, 53, 0.04);
        padding: 15px;
        font-family: 'Golos';
        align-items: center;
        font-weight: 500;
        font-size: 14px;
        justify-content: center;
        line-height: 17px;
        & img {
          margin-right: 12px;
        }
      }

      & .article-detail {
        h4 {
          margin-bottom: 12px;
          font-weight: 600;
          font-size: 32px;
        }
        & .validator {
          font-weight: 400;
          font-size: 16px;
          color: #847f99;
          font-family: 'Golos';
        }
        & .article-detail-items {
          margin-top: 24px;

          h5 {
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            font-family: 'Lora';
            color: #2a2c35;
            margin-bottom: 16px;
          }
          p {
            font-family: 'Golos';
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            color: #2a2c35;
          }
          & .table_mobile {
            display: none;
            @media (max-width: 900px) {
              display: block;
            }
            & .card {
              margin-top: 16px;
              & hr {
                margin-top: 18px;
              }
              & .text {
                font-family: 'Golos';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 170%;
                color: #2a2c35;
                margin-bottom: 14px;
              }
              & .roise {
                display: flex;

                align-items: center;
                & img {
                  margin-right: 14px;
                }
                & .roise_item {
                  font-family: 'Lora';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 20px;
                  color: #2a2c35;
                }
              }
              :last-child {
                & hr {
                  width: 0px;
                }
              }
            }
          }
        }
        @media (max-width: 900px) {
          & h4 {
            font-weight: 600;
            font-size: 20px;
            line-height: 160%;
          }
        }
      }
    }

    & .btns {
      display: flex;
      text-align: center;
      justify-content: center;
      padding: 24px 0px;
      & .btn {
        box-shadow: 0px 3px 0px #2a2c35;
        border-radius: 1000px;
        cursor: pointer;
        font-family: 'Golos';
        font-weight: 500;
        font-size: 16px;
        color: #2a2c35;
        width: 148px;
        height: 59px;
        padding: 20px;
        align-items: center;
        display: flex;
        border: 1px solid #2a2c35;
        justify-content: center;
      }
      & .prev-button {
        background: #f6f4f0;
        margin-right: 24px;
      }
      & .prev-button-first {
        background: #f0f3f4;
        opacity: 0.5;
        margin-right: 24px;
      }
      & .prev-button-three {
        background: #ff6a6a;

        margin-right: 24px;
      }
      & .next-button {
        background: #8be4d4;
      }
    }
    @media (max-width: 900px) {
      padding: 4px 15px;
    }
    @media (max-width: 500px) {
      padding: 0px 15px;
    }
  }
  & .error_test {
    font-family: Golos;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgb(255, 106, 106);
    margin-left: 2px;
    margin-top: 8px;
  }
  & .rt_title {
    text-align: center;
  }
`;
