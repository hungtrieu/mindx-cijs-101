const Input = (props) => {
    return <input value={props.cValue} onChange={ (e) => {props.handleChange(e)}} />;
  };
  export default Input;