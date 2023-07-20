import { SettingsSelectContainer } from '../../styleComponents/settings/SettingsSelectStyle';

const SettingsSelect = ({
  value = '',
  label = '',
  type = 'text',
  name = 'name',
  placeholder = '',
  required = true,
  isError = false,
  errorText = '',
  disabled = false,
  onChange = e => {},
}) => (
  <SettingsSelectContainer>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="label">
      {label}
      {required && <span>*</span>}
    </label>

    {disabled === true ? (
      <div className="itarget disabled">
        {' '}
        <input type="hidden" name={name} value={value} disabled />
        <div className="select_value">{value}</div>
        <img className="icon" src="/img/select_icon.svg" alt="" />
      </div>
    ) : (
      <div className="itarget">
        <input type="hidden" name={name} value={value} />
        <div className="select_value">{value}</div>
        <img className="icon" src="/img/select_icon.svg" alt="" />
      </div>
    )}

    {isError && <div className="error">{errorText}</div>}
  </SettingsSelectContainer>
);
export default SettingsSelect;
