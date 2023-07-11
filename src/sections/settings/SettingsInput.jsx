import ReactInputMask from "react-input-mask";
import { SettingsInputContainer } from "../../styleComponents/settings/SettingsInputStyle";

const SettingsInput = ({
  value = "",
  label = "",
  type = "text",
  name = "name",
  placeholder = "",
  is_requared = true,
  is_error = false,
  errorText = "",
  disabled = false,
  onChange = (e) => {},
  is_orcid=false
}) => {
  return (
    <>
      <SettingsInputContainer>
        <label className="label">
          {label}
          {is_requared && <span>*</span>}
        </label>
        <div className="itarget">
          {disabled === true ? (
            <input
              type={type}
              name={name}
              className="input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              disabled
            />
          ) : (<>{is_orcid?
            <ReactInputMask
              name={name}
              className="input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              formatChars={{ 'n': '[0-9]' }} 
              mask='nnnn-nnnn-nnnn-nnnn'
              maskChar='_'
              alwaysShowMask={false}
            />
            :<input
              type={type}
              name={name}
              className="input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />}
          </>)}
        </div>
        {is_error && <div className="error">{errorText}</div>}
      </SettingsInputContainer>
    </>
  );
};
export default SettingsInput;
