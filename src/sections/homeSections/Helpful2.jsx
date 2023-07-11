import { Helpful2Container } from "../../styleComponents/home/Helpful2Style";
import { useTranslation } from 'react-i18next';

const Helpful2 = () => {
    const { t } = useTranslation();
    return(<>
    <Helpful2Container>
    <div className="library"> 
            <div className="cards">
                <div  className="card card1">
                    <div className="card_body">
                        <div> 
                            <div className="himg">
                                <img src='/img/pen.svg' alt='hsearch'/>
                            </div>
                            <h3 className="title">{t('helpful2.author')}</h3>
                            <p className="desc">{t('helpful2.authorInfo')}</p>
                        </div>
                    </div>
                </div>
                <div  className="card card2">
                    <div className="card_body" >
                        <div> 
                            <div className="himg">
                                <img src='/img/validator.svg' alt='hsearch'/>
                            </div>
                            <h3 className="title">{t('helpful2.reviewer')}</h3>
                            <p className="desc">{t('helpful2.reviewerInfo')}</p>
                        </div> 
                    </div>
                </div>
                <div  className="card card3">
                    <div className="card_body" >
                        <div> 
                            <div className="himg">
                                <img src='/img/reader.svg' alt='hsearch'/>
                            </div>
                            <h3 className="title">{t('helpful2.reader')}</h3>
                            <p className="desc">{t('helpful2.readerInfo')}</p>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    </Helpful2Container>
    </>)
}
export default Helpful2;