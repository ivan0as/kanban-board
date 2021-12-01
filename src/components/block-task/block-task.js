import uniqid from 'uniqid';
import { LIST_TYPES, LIST_COPY } from '../../config';
import List from '../list';
import css from './block-task.module.css';

export default function BlockTask(props) {
    const {tasks, setTasks} = props

    const addNewTask = (title) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: '',
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask])
    }
    
    const LIST_SELECT = Object.create(LIST_TYPES)

    let valueListTypes

    for (let keySelect in LIST_SELECT) {
        for (let keyTypes in LIST_TYPES) {
            if (0 === keySelect) {
                valueListTypes = LIST_TYPES[keyTypes]
            } else {
                keySelect = LIST_TYPES[keyTypes]
                LIST_SELECT[keySelect] = valueListTypes
                valueListTypes = LIST_TYPES[keyTypes]
            }
        }
    }

    const liskSelect = (status) => {
        for (let key in LIST_SELECT) {
            if (key === status) {
                return (
                    LIST_SELECT[key]
                )
            }
        }
    }

    return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                const listSelect = tasks.filter(task => (liskSelect(type) === task.status))
                const tasksGlobal = tasks
                return (
                    <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} setTasks={setTasks} addNewTask={addNewTask} listSelect={listSelect} tasksGlobal={tasksGlobal} LIST_SELECT={LIST_SELECT}/>
                )
            })}
        </div>
    );
}