import styled from "styled-components";

export const CategoryFilterContainer = styled.div`
    &>.title{
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        text-align: center;
        color: #2A2C35;
        padding-bottom: 36px;
    }
    &>.target{
        display: flex;
        & .cats{
            flex: 1;
            &>.ctitle{
                display: flex;
                align-items: center;
                justify-content: space-between;
                &>.cat{
                    font-family: 'Golos';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #2A2C35;
                }
                &>.checkbox{
                    display: flex;
                    align-items: center;
                    font-family: 'Golos';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    color: #2A2C35;
                    cursor: pointer;
                    &>.checkInput{ 
                        margin-right: 12px;
                    }
                }
            }
            &>.items_target{
                border: 1px solid #E0E3E4;
                border-radius: 12px;
                padding: 8px 16px;
                margin-top: 24px;
                & .item{
                    &>.item_info{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        padding: 8px 0;
                        &>.name{
                            cursor: pointer;
                            display: flex;
                            align-items: flex-start;
                            font-family: 'Golos';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 150%;
                            display: flex; 
                            &>.puls{
                                min-width: 20px;
                                width: 20px;
                                min-height: 20px;
                                height: 20px;
                                margin-right: 12px;
                            }
                        }
                        &>.checkbox{
                            padding-left: 8px;
                            &>input{
                                width: 18px;
                                height: 18px;
                            }
                        }
                    }
                    &>.childs{
                        padding-left: 32px;
                    }
                }
            }
        }
        & .selects{
            flex: 1;
            padding-left: 32px;
            &>.stitle{
                font-family: 'Golos';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 22px; 
                color: #2A2C35;
                display: flex;
                align-items: center;
            }
            &>.selected{
                margin-top: 24px;
                &>.s_cat{
                    display: inline-flex;
                    align-items: center;
                    background: #FFFFFF;
                    border: 1px solid #2A2C35;
                    border-radius: 1000px;
                    padding: 12px 16px;
                    max-width: 100%;
                    margin-bottom: 12px;
                    margin-right: 12px;
                    max-width: 430px;
                    &>.name{
                        font-family: 'Golos';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                        color: #2A2C35;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    &>.icon{
                        margin-left: 4px;
                        cursor: pointer;
                        & img{
                            width: 20px;
                            min-width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
    &>.btns{
        display: flex;
        justify-content: right;
        align-items: center;
        padding-top: 36px;
        &>.cancel{
            background: #F0F3F4;
            border: 1px solid #2A2C35;
            box-shadow: 0px 2px 0px #2A2C35;
            border-radius: 1000px;
            font-family: 'Golos';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px; 
            color: #2A2C35;
            padding: 14.5px 49px;
            margin-right: 16px;
        }
        &>.filter{
            background: #8BE4D4;
            border: 1px solid #2A2C35;
            box-shadow: 0px 2px 0px #2A2C35;
            border-radius: 1000px;
            font-family: 'Golos';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px; 
            color: #2A2C35;
            padding: 14.5px 49px;
        }
    }
    
`;