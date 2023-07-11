import { SettingsSelectContainer } from "../../styleComponents/settings/SettingsSelectStyle";

const SettingsSelect = ({
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
}) => {
  return (
    <>
      <SettingsSelectContainer>
        <label className="label">
          {label}
          {is_requared && <span>*</span>}
        </label>

        {disabled === true ? (
          <div className="itarget disabled">
            {" "}
            <input type={"hidden"} name={name} value={value} disabled />
            <div className="select_value">{value}</div>
            <img className="icon" src="/img/select_icon.svg" alt="" />
          </div>
        ) : (
          <div className="itarget">
            <input type={"hidden"} name={name} value={value} />
            <div className="select_value">{value}</div>
            <img className="icon" src="/img/select_icon.svg" alt="" />
          </div>
        )}

        {is_error && <div className="error">{errorText}</div>}
      </SettingsSelectContainer>
    </>
  );
};
export default SettingsSelect;
