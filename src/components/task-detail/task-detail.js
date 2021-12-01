import { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import css from './task-detail.module.css';
import Line1 from './Line1.svg';
import Line2 from './Line2.svg'

export default function TaskDetail(props) {
    const match =  useRouteMatch()
    const {taskId} = match.params
    const {tasks, setTasks} = props

    const task = tasks.find(task => task.id === taskId)

    const [values, setValues] = useState({
        description: task.description
    })

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleClick = () => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, description: values.description}
            }
            return task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <h2 className={css.header_title}>{task.title}</h2>
                <Link to='/' className={css.btn_close} onClick={handleClick}>
                    <img className={css.line + ' ' + css.line1} src={Line1} alt='x'/>
                    <img className={css.line} src={Line2} alt='x'/>
                </Link>
            </div>
            <textarea 
            className={css.textarea}
            id='taskDescription'
            name='description'
            value={values.description}
            onChange={handleChange}
            placeholder='This task has no description'
            />
        </div>
    );
}