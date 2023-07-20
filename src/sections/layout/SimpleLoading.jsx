import styled from 'styled-components';

const SimpleLoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  & .loader {
    border-radius: 50%;
    width: 6em;
    height: 6em;
    margin: 10px;
    font-size: 7px;
    position: absolute;
    top: 0px;
    text-indent: -9999em;
    border-top: 0.7em solid transparent;
    border-right: 0.7em solid #8be4d4;
    border-bottom: 0.7em solid #8be4d4;
    border-left: 0.7em solid #8be4d4;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 0.7s infinite linear;
    animation: load8 0.7s infinite linear;
    &:after {
      border-radius: 50%;
      width: 6em;
      height: 6em;
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

const SimpleLoading = props => {
  const { size, color } = props;
  const loadStyle = () => {
    let style = {};
    if (size) style = { ...style, fontSize: size, margin: size };
    if (color) style = { ...style, borderLeft: `.7em solid ${color}` };
    return style;
  };
  return (
    <SimpleLoadingStyle style={{ padding: size ? size * 4 : 30 }}>
      <div className="loader" style={loadStyle()} />
    </SimpleLoadingStyle>
  );
};
export default SimpleLoading;
