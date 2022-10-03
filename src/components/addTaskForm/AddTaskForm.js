import './addTaskForm.scss';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className="form">
          <div className="form-item">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
              placeholder='Задача'
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="form-btn"
            >Добавить</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;