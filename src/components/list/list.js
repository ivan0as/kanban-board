import { useState } from 'react';
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config';
import FormAddNewTask from '../form-add-new-task';
import FormСhange from '../form-change';
import BtnAddCard from '../btn-add-card';
import css_main from '../main/main.module.css';
import css from './list.module.css';

export default function List(props) {
    const {title, type, tasks, setTasks, addNewTask, listSelect, tasksGlobal, LIST_SELECT} = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handleClick = () => {
        if (values.title) {
            addNewTask(values.title)
            setFormVisible(!isFormVisible)
            values.title=''
        } else {
            setFormVisible(!isFormVisible)
        }
    }


    return (
        <div className={css.list}>
            <h2 className={css_main.title_task}>{title}</h2>
            {tasks.map( task => {
                return(
                    <Link to={`/tasks/${task.id}`} className={css.link}>
                        <div key={task.id} className={css.task}>{task.title}</div>
                    </Link>
                )
            })}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask values={values} setValues={setValues} handleClick={handleClick}/>
            )}
            {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <FormСhange listSelect={listSelect} setTasks={setTasks} tasksGlobal={tasksGlobal} LIST_SELECT={LIST_SELECT} handleClickFormChange={handleClick}/>
            )}
            <button 
                className={
                    css.button_add_card + ' ' + 
                    (values.title ? css.button_add_card_switch : '') + ' ' + 
                    (!listSelect.length && type !== LIST_TYPES.BACKLOG ? css.button_add_card_disabled : '')
                } 
                onClick={handleClick}
                disabled={(!listSelect.length && type !== LIST_TYPES.BACKLOG)}>
                {!values.title
                    ? <BtnAddCard/>
                    : <span>Submit</span>
                }
            </button>
        </div>
    );
}