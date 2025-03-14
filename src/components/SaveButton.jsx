import "./SaveButton.scss";

function SaveButton(props) {
  return (
    <button className="saveButton" onClick={props.action}>
      save
    </button>
  );
}

export default SaveButton;
