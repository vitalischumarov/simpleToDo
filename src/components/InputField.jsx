import "./InputField.scss";

function InputField(props) {
  return (
    <div className="inputField">
      <input
        type="text"
        className="inputField__element"
        placeholder="To Do eingeben..."
        value={props.text}
        onChange={props.action}
      />
    </div>
  );
}

export default InputField;
