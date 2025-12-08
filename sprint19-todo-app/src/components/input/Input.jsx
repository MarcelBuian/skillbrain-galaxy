import "./Input.css";

const Input = ({value, onValueChange, type}) => {
  return <input
    value={value}
    className="primary-input"
    onChange={(e) => {onValueChange(e.target.value)}}
    placeholder="Title"
    type={type ? type : 'text'}
  />;
};


export default Input;
