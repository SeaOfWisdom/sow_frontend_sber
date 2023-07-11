import { NavLink } from "react-router-dom";
import { SelectRoleContainer } from "../../styleComponents/settings/SelectRoleStyls";

const SelectRole = () => {
    return(<>
    <SelectRoleContainer>
        <div className="title">Выберите роль</div>
        <div className="navbar">
            <NavLink to='/select-author' className='link link1'>
                <div className="icon">
                    <img src='/img/circule1.svg' alt=''  className="active_icon"/>
                    <img src='/img/circule.svg' alt=''  className="passive_icon"/>
                </div>
                <div>
                    <div className="rtitle">Автор</div>
                    <div className="desc">Владеет собственностью на свою работу (NFT), которая публикуется и приносит вознаграждение каждый раз, когда кто-то ее читает</div>
                </div>
            </NavLink>
            <NavLink to='/select-validator' className='link link2'>
                <div className="icon">
                    <img src='/img/circule1.svg' alt=''  className="active_icon"/>
                    <img src='/img/circule.svg' alt=''  className="passive_icon"/>
                </div>
                <div>
                    <div className="rtitle">Валидатор</div>
                    <div className="desc">Проверяет представленные работы и получает вознаграждение за легитимные работы</div>
                </div>
            </NavLink>
        </div>
    </SelectRoleContainer>
    </>)
}
export default SelectRole;