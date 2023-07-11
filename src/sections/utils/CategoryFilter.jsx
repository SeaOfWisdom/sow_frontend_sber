import { CategoryFilterContainer } from "../../styleComponents/utilsStyles/CategoryFilterStyle"
import Checkbox from "./Checkbox"

const CategoryFilter = () => {
    return(<>
    <CategoryFilterContainer> 
        <div className="title">Выберите категории</div>
        <div className="target">
            <div className="cats">
                <div className="ctitle">
                    <div className="cat">Категории</div>
                    <label className="checkbox">
                        <Checkbox className="checkInput"/>
                        Все категории
                    </label>
                </div>
                <div className="items_target">
                    <div className="item">
                        <div className="item_info">
                            <div className="name">
                                <img className="puls" src='/img/plus.svg' alt=''/>
                                01.01.01 Вещественный, комплексный и функциональный анализ
                            </div>
                            <div className="checkbox">
                                <label><Checkbox className="checkInput"/></label>
                            </div>
                            
                        </div>
                        <div className="childs">
                            <div className="item">
                                <div className="item_info">
                                    <div className="name">
                                        <img className="puls" src='/img/plus.svg' alt=''/>
                                        01.01.01 Вещественный, комплексный и функциональный анализ
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox className="checkInput"/></label>
                                    </div>
                                    
                                </div>
                                <div className="childs">

                                </div>

                            </div>
                            <div className="item">
                                <div className="item_info">
                                    <div className="name">
                                        <img className="puls" src='/img/minus.svg' alt=''/>
                                        01.01.01 Вещественный, комплексный и функциональный анализ
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox className="checkInput"/></label>
                                    </div>
                                    
                                </div>
                                <div className="childs">

                                </div>

                            </div>
                            <div className="item">
                                <div className="item_info">
                                    <div className="name">
                                        <img className="puls" src='/img/plus.svg' alt=''/>
                                        01.01.01 Вещественный, комплексный и функциональный анализ
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox className="checkInput"/></label>
                                    </div>
                                    
                                </div>
                                <div className="childs">

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="selects">
                <div className="stitle">Выбрано: 0</div>
                <div className="selected">
                    <div className="s_cat">
                        <span className="name">01.01.03 Математическая физика</span>
                        <span className="icon">
                            <img src='/img/close.svg'  alt=''/>
                        </span>
                    </div>
                    <div className="s_cat">
                        <span className="name">01.01.05 Теория вероятностей и математическ вероятностей и математическ вероятностей и математическ</span>
                        <span className="icon">
                            <img src='/img/close.svg'  alt=''/>
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <div className="btns">
            <button className="cancel">Очистить</button>
            <button className="filter">Применить</button>
        </div>
    </CategoryFilterContainer>
    </>)
}
export default CategoryFilter