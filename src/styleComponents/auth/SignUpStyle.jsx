import styled from "styled-components";

export const SignUpContainer = styled.div`
    & .title{
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        text-align: center;
        color: #2A2C35;
    }
    & .desc{
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 180%;
        text-align: center;
        color: #2A2C35;
        padding: 12px 0 36px 0;
    }
    & .common_error{
        color: red;
        font-size: 14px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 180%;
        padding-bottom: 20px;
        margin-top: -10px;
    }
    & .input_target{
        padding-bottom: 24px;
        & label{
            font-family: 'Golos';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px; 
            color: #2A2C35;    
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & .requered{
                font-family: 'Golos';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: #FF6A6A;
                padding-left: 4px;
            }
            & .conditions{
                text-decoration-line: underline;
                margin-left: 5px;
            }
        }
        & .nick_name{
            display: block;
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #CFD2D8;
            border-radius: 6px;
            padding: 12px 20px;
            font-family: 'Golos';
            font-style: normal;
            font-weight: 400;
            margin: 10px 0 12px 0;
        }
        & .checkbox{ 
            margin-right: 15px; 
        }
    }
    & .seccond{
        padding-bottom: 36px;
    }
    & .btn{
        background: #8BE4D4;
        border: 1px solid #2A2C35;
        box-shadow: 0px 3px 0px #2A2C35;
        border-radius: 1000px;
        width: 100%;
        text-align: center;
        padding: 20px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #2A2C35;
        cursor: pointer;
    }
`;