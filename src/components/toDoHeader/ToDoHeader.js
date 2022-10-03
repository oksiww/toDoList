import { useState } from 'react';
import moment from 'moment/moment';
import './toDoHeader.scss';

const ToDoHeader = ({onChange}) => {

    const [value, setValue] = useState('');
    const weekDay = moment().subtract(10, 'days').calendar();

    const inputHandler = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return(
            <div className="todo_header">
                <h2 className="todo_header-title">Список задач</h2>
                <div className='todo_header-wrapper'>
                    <div>
                        <span className='todo_header-wd'>{weekDay}</span>
                    </div>
                    <input type="text"
                        className='todo_header-search'
                        placeholder="Поиск"
                        onChange={(e) => inputHandler(e)}
                        value={value}/>
                </div>
            </div>
            
        
    )
}

export default ToDoHeader;