import styled from "styled-components";

const StyleCheckbox = styled.span`
 .checkbox_target {
    align-items: center;
    display: flex;
    width: 20px;
    height: 20px;
    position: relative; 
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .checkbox_target input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border: 1.5px solid #CFD2D8;
    border-radius: 6px;
  }
  
  /* On mouse-over, add a grey background color */
  .checkbox_target:hover input ~ .checkmark {
    background-color: #E5E5E5;
  }
  
  /* When the checkbox is checked, add a blue background */
  .checkbox_target input:checked ~ .checkmark {
    background-color: #8BE4D4;
    border: 1.5px solid #8BE4D4;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .checkbox_target input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .checkbox_target .checkmark:after {
    left: 6.5px;
    top: 3.5px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = ({name="", checked=false, className='', onChange=()=>{}}) => {
    return(<span className={className}>
        <StyleCheckbox>
            <span class="checkbox_target"> 
                <input 
                    type="checkbox" 
                    name={name} 
                    checked={checked} 
                    onChange={onChange}
                />
                <span class="checkmark"></span>
            </span>
        </StyleCheckbox>
    </span>)
}

export default Checkbox;