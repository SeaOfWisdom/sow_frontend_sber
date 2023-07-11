import styled from "styled-components";

export const PaginationContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
    & .pagination{
      padding: 50px 0 44px 0;
      & ul{
        display: flex;
        justify-content: center;
        align-items: center;
         & li{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          margin: 0 6px;
          border-radius: 100px;
          cursor: pointer;
          &:hover{
            border: 1px solid #2A2C35;
          }
          & a{
            font-family: 'Lora';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
          }
         }
         & .active{
            background: #2A2C35;
            color: #fff;
         }
         & .left{
            & img{
                transform: rotate(90deg);
                width: 16px;
                height: 16px;
            }
         }
         & .right{
            & img{
                transform: rotate(-90deg);
                width: 16px;
                height: 16px;
            }
         }
      }
    }
`;
