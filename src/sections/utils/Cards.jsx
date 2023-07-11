import { Link } from "react-router-dom";
import { CardsContainer } from "../../styleComponents/utilsStyles/CardsStyle";
import { useState } from "react"; 

import AeticleSaved from "./AeticleSaved";
import Created_at from "./Created_at";

import DateForm from "./DateForm";
import { useDispatch, useSelector } from "react-redux";


const Cards = ({library=[], updateLibrary=()=>{}}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const [savedItem, setSevedItem] = useState({})
    const {account} = useSelector((s) => s); 
    return(<>
        <CardsContainer>
            <div className="cards">
                {library?.map((item, index)=>(<>
                <div  className="card" key={index}>
                    <div className="bookmark_target">
                        {account?.role?<>
                        {item?.bookmarked?
                        <img className="bookmark" src='/img/bookmark2.svg'  onClick={()=>{
                            setIsOpen(true);
                            setSevedItem({
                                article_id: item?.work?.id??'',
                                bookmarked: item?.bookmarked??false
                            });
                        }} alt="bookmark"/>
                        :<img className="bookmark" src='/img/bookmark.svg'  onClick={()=>{
                            setIsOpen(true);
                            setSevedItem({
                                article_id: item?.work?.id??'',
                                bookmarked: item?.bookmarked??false
                            });                        
                        }} alt="bookmark"/>}
                        </>:<>
                            <img className="bookmark" src='/img/bookmark.svg'  onClick={()=>{
                                dispatch({type: 'SET_OPEN_AUTH', payload: true})                      
                            }} alt="bookmark"/>
                        </>}
                    </div>
                    <Link to={`/articles/${item?.work?.id??''}`} className="card_body">
                        <div>
                            <div className="date">
                                <img src="/img/star.svg" alt='star'/>
                                <span className="time">
                                    <DateForm
                                        created_at={item?.work?.created_at} 
                                    />
                                </span>
                            </div>
                            <h3 className="title">{item?.work?.name??''}</h3>
                            <div className="author">
                                {/* <span>{item?.author_info?.basic_info?.NickName??''}</span> */}
                                <span><Link to={`/articles-author/${item?.author_info?.basic_info?.Web3Address??''}`}>
                                    {((item?.author_info?.author_info?.name??(item?.author_info?.basic_info?.NickName??'')) 
                                        +" "+
                                    (item?.author_info?.author_info?.surname??'')) }
                                </Link></span> 
                            </div>
                            <p className="desc">{item?.work?.annotation??''}</p>
                        </div>
                        <div>
                            <div className="condition">
                                {item?.work?.Tags?.map((tag, tindex)=>(
                                    <span className="btn" key={tindex}>{tag}</span> 
                                ))}
                            </div>
                            <div className="price_target">
                                <span className="price">{(item?.work?.price??0)/1000000000000000000}</span>
                                <span className="unity">SOW</span>
                            </div>
                        </div>
                    </Link>
                </div>
                </>))}
            </div>
            <AeticleSaved 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                bookmarked={savedItem?.bookmarked}
                article_id={savedItem?.article_id}
                handleSaved={value=>{
                    let l=[];
                    library.forEach(item=>{
                        if(item?.work?.id===savedItem?.article_id){
                            l = [...l, {...item, bookmarked: value}]
                        }else{
                            l = [...l, item]
                        }
                    });
                    updateLibrary(l);
                }}
            /> 
        </CardsContainer>
        
    </>)
}
export default Cards;
