import { SettingsSaveBtnContainer } from "../../styleComponents/settings/SettingsSaveBtnStyle";

const SettingsSaveBtn = ({
    text="Save",
    type="button",
    onClick=()=>{}
}) => {
    return(<>
    <SettingsSaveBtnContainer>
        <button type={type} onClick={onClick}>{text}</button>
    </SettingsSaveBtnContainer>
    </>)
}
export default SettingsSaveBtn;