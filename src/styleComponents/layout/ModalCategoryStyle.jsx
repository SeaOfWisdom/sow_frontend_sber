import styled from "styled-components";

export const ModalCategoryContainer = styled.div` 
    & .chakra-modal__content{
        max-width: 990px;
        background: #F0F3F4;
        border-radius: 12px;
        margin: 10px
    }
    & .chakra-modal__header{
        padding: 20px 40px;
    }
    & .chakra-modal__body{
        padding: 10px 40px;
    }
    & .chakra-modal__footer{
        padding:  20px 40px;
    }
    & .close_btn{
        background: #FFFFFF;
        border-radius: 30px;
        height: 30px;
        width: 30px;
        top: 24px;
        right: 24px;
        color: #847F99
    }
`;