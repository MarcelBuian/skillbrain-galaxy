import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = ({todo, onCompletedChange, onDelete, onEdit}) => {
  const {completed, title, description} = todo;
  const handleCheckboxChange = (value) => onCompletedChange(value);

  return (
    <div className={`todo-item ${completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={completed}
            onChange={handleCheckboxChange}
          />

          <h4>{title}</h4>
        </div>
        <div>
          <i className="fa fa-pencil" aria-hidden="true" onClick={onEdit}></i>
          <i className="fa fa-trash" aria-hidden="true" onClick={onDelete}></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
