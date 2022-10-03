import {useEffect, useState} from 'react';
import AddTaskForm from './components/addTaskForm/AddTaskForm.js';
import UpdateForm from './components/updateForm/UpdateForm.js';
import ToDo from './components/toDo/ToDo.js';
import ToDoHeader from './components/toDoHeader/ToDoHeader.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import './media.scss';

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
}


function App() {

  const [toDo, setToDo] = useState(getLocalStorage());
  const [filterToDo, setFilterToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

 useEffect(() => {
  localStorage.setItem("list", JSON.stringify(toDo));
 }, [toDo]);
  
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  
  const cancelUpdate = () => {
    setUpdateData('');
  }

  
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  const changeHandler = (value) => {
    let currentToDos = [];
    let newList = [];
    if(value !== "") {
      currentToDos = toDo;
      newList = currentToDos.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    } else {
      newList = toDo;
    }
    setFilterToDo(newList);
  }
  useEffect (
    (_)=> {
      setFilterToDo(toDo)
    },
    [toDo]
  )


  return (
    <div className="container">

    <ToDoHeader onChange={changeHandler}/>

    <ToDo
      toDo={filterToDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : <h2 className='notasks'>Список пуст...</h2>}

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    

    </div>
  );
}

export default App;

