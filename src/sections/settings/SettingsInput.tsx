import ReactInputMask from 'react-input-mask';
import { ChangeEventHandler, FC } from 'react';
import { SettingsInputContainer } from '../../styleComponents/settings/SettingsInputStyle';

type Props = {
  value?: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  isError?: boolean;
  errorText?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isOrcid?: boolean;
};

const SettingsInput: FC<Props> = ({
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
  isOrcid = false,
}) => (
  <SettingsInputContainer>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="label">
      {label}
      {required && <span>*</span>}
    </label>
    <div className="itarget">
      {disabled ? (
        <input
          type={type}
          name={name}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled
        />
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {isOrcid ? (
            <ReactInputMask
              name={name}
              className="input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              formatChars={{ n: '[0-9]' }}
              mask="nnnn-nnnn-nnnn-nnnn"
              maskChar="_"
              alwaysShowMask={false}
            />
          ) : (
            <input
              type={type}
              name={name}
              className="input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}
        </>
      )}
    </div>
    {isError && <div className="error">{errorText}</div>}
  </SettingsInputContainer>
);
export default SettingsInput;
