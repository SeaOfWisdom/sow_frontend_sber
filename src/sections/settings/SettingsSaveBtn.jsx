import { SettingsSaveBtnContainer } from '../../styleComponents/settings/SettingsSaveBtnStyle';

const SettingsSaveBtn = ({
  text = 'Save',
  type = 'button',
  onClick = () => {},
}) => (
  <SettingsSaveBtnContainer>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} onClick={onClick}>
      {text}
    </button>
  </SettingsSaveBtnContainer>
);
export default SettingsSaveBtn;
