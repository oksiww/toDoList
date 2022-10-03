import './updateForm.scss';

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        {/* Update Task */}
        <div className="update_wrapper">
          <div className="update_wrapper-form">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <button
            onClick={updateTask}
            className="update_wrapper-btn"
          >Обновить</button>
          <button
            onClick={cancelUpdate}
            className="update_wrapper-btn update_wrapper-btn-second"
          >Отмена</button>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;