import { useState } from 'react';
import css from './form-change.module.css';

export default function FormChange(props) {
    const {listSelect, setTasks, tasksGlobal, LIST_SELECT, handleClickFormChange} = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const handleChange = (e) => {
		const updatedTasks = tasksGlobal.map(task => {
            if (task.id === e.target.value) {
                for (let key in LIST_SELECT) {
                    if (LIST_SELECT[key] === task.status) {
                        setFormVisible(!isFormVisible)
                        handleClickFormChange()
                        return {...task, status: key}
                    }
                }
            }
            return task
        })
        setTasks(updatedTasks)
	}

    return (
        <div className={css.form_change}>
            <button className={css.task_select} onClick={handleClick}></button>
            {isFormVisible && (
                <div className={css.option_group}>
                {listSelect.map( task => {
                    return <button className={css.button_option} key={task.id} value={task.id} onClick={handleChange}>{task.title}</button>
                })}
                </div>
            )}
        </div>
    );
}