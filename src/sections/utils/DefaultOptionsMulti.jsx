export const DefaultOptionsMulti = {
  isMulti: true,
  isSearchable: false,
  isDisabled: false,
  styles: {
    container: styles => ({
      ...styles,
      // marginRight: "16px",
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      width: '100%',
      padding: '0px 20px',
      fontFamily: 'Golos',
      fontSize: '16px',
      background: '#FFFF',
      marginTop: '10px',
      border: isFocused ? '1px solid #8BE4D4!important' : '1px solid #CFD2D8',
      borderRadius: '6px',
      minHeight: '48px',

      boxShadow: isFocused ? 'none' : 'none',
      // border: "1px solid #2A2C35",
    }),
    singleValue: style => ({
      ...style,
      fontFamily: 'Golos',
    }),
    valueContainer: styles => ({
      ...styles,
      color: 'black',
      fontWeight: 500,
      minHeight: '48px',
      // paddingTop: "9px",
      paddingLeft: '0px',
    }),
    indicatorSeparator: styles => ({
      ...styles,
      backgroundColor: '#FFFF',
      with: '0px',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: '#2A2C35',
      padding: '0px',
      marginLeft: '5px',
      '&:hover': {
        color: '#2A2C35',
      },
    }),
    option: styles => ({
      ...styles,
      fontFamily: 'Golos',
    }),
    indicatorContainer: styles => ({
      ...styles,
      display: 'none',
    }),
    MultiValuegeneric: styles => ({
      ...styles,
      fontFamily: 'Golos!important',
    }),
    multiValue: styles => ({
      ...styles,
      borderRadius: '100px',
      backgroundColor: '#F0F3F4',
      padding: '0px 8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    multiValueRemove: styles => ({
      ...styles,
      width: '13px',
      height: '13px',
      padding: '0',
      marginLeft: '9px',
      border: '1px solid #2A2C35',
      borderRadius: '50%',
      '& :hover': {
        background: '#F0F3F4',
        width: '13px',
        height: '11px',
        borderRadius: '50%',
      },
    }),
    placeholder: styles => ({
      ...styles,
      color: 'white',
      fontFamily: 'Golos',
      fontSize: '16px',
    }),
  },
};
