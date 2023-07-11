import { useState } from "react";
import styled from "styled-components";

const MultipleInputContainer = styled.div`
    & .grouping{
        background: #FFFFFF;
        border: 1px solid #CFD2D8; 
        border-radius: 6px;
        display: flex;
        margin-top: 10px;
        padding: 4px 12px;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
        cursor: text;
        & .d_item{
            display: inline;
            padding: 4px 0;
            & .a_g_item{
                background: #F0F3F4;
                border-radius: 100px !important;
                padding: 4px 8px !important;
                font-family: 'Golos' !important;
                font-style: normal !important;
                font-weight: 400 !important;
                font-size: 12px !important;
                line-height: 14px !important;
                color: #2A2C35 !important;
                margin-right: 8px !important;
                display: flex;
                justify-content: center;
                align-items: center;
                & .close_btn{
                    cursor: pointer;
                    margin-left: 8px;
                }
            }
        }
        & .a_g_input{
            border: 0 !important;
            padding: 0 !important;
            width: auto !important;
            height: 40px !important;
            margin: 0 !important;
        }
    }
    & .disabled_grouping{
        background: #F0F3F4;
        cursor: default;
    }
    & .disbled_a_g_item{
        background-color: #fff !important;
        & .close_btn{
            cursor: default !important; 
        }
    }
`

const MultipleInput = ({details, setDetails, is_disabled=false}) => {
    const [newDetail, setNewDetail] = useState('');
    const delDetail = (dindex) => {
        let l = [];
        details.forEach( (a, index)=> {
            if(index!==dindex ){ 
                l.push(a);
            } 
        });
        setDetails(l);
    }
    const addDetail = (word) => {
        if(word.length) setDetails([...details, word]);
        setNewDetail('');
    } 
    const onKeyDownHandle = (e) =>{
        if(e.keyCode===13 && e?.target?.value?.length){
            addDetail(e.target.value);
        }
        if(e.keyCode===8 && !e.target.value && details.length-1>=0){
            delDetail(details.length-1);
        }
    }
    return(<>
    <MultipleInputContainer>
        <label className={is_disabled?"grouping disabled_grouping":"grouping"}>
            {details.map((item, index_item)=>(
            <div  className="d_item" key={index_item}>
                <div className={is_disabled?"a_g_item disbled_a_g_item":"a_g_item"}>
                    {item} 
                    <img src="/img/close-circle1.svg"  className="close_btn" 
                        onClick={()=>{if(!is_disabled) delDetail(index_item)}}
                    />
                </div> 
            </div>
            ))}
            <input type="text"  
                disabled={is_disabled}
                className='a_g_input'
                size={newDetail.length?newDetail.length:2}
                value={newDetail}
                onChange={e=>{ setNewDetail(e.target.value ) } }
                onBlur={e=>{
                    addDetail(newDetail)
                }}
                onKeyDown={e=>{ onKeyDownHandle(e) } }
            />
        </label>
    </MultipleInputContainer>
    </>)
}
export default MultipleInput;