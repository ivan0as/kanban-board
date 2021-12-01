import { LIST_TYPES, LIST_COPY } from '../../config';
import css from './footer.module.css';
import css_app from '../app/app.module.css';

export default function Footer(props) {
    const {tasks} = props
    
    let activeTasks = 0
    let finishedTasks = 0

    tasks.forEach((task) => {
        if (task.status === LIST_TYPES.BACKLOG) activeTasks += 1
        else if (task.status === LIST_TYPES.FINISHED) finishedTasks += 1
    })

    return (
        <footer className={css.footer}>
            <div className={css_app.container+" "+css.footer_content}>
                <div>
                    <p>Active tasks: {activeTasks}</p>
                    <p>{LIST_COPY[LIST_TYPES.FINISHED]} tasks: {finishedTasks}</p>
                </div>
                <p>Kanban board by Ivan, {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}