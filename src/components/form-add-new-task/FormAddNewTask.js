import css_list from '../list/list.module.css';
import css from './FormAddNewTask.module.css';

export default function FormAddNewTask(props) {
    const {setValues, values, handleClick} = props

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title) {
            handleClick()
        }
    }

    return (
        <form className={css.form_add_new_task} onSubmit={handleSubmit}>
            <input
                className={css_list.task + ' ' + css.task_input}
                id='taskTitle'
                name='title'
                type='text'
                placeholder='_____________________________'
                value={values.title}
                onChange={handleChange}
            />
        </form>
    );
}