import { Switch, Route } from 'react-router-dom'
import css from './main.module.css';
import css_app from '../app/app.module.css';
import BlockTask from '../block-task';
import TaskDetail from '../task-detail'

export default function Main(props) {
    return (
        <main className={css.main}>
            <Switch>
                <Route exact path={'/'}>
                    <div className={css_app.container+' '+css.main_content}>
                        <BlockTask {...props}/>
                    </div>
                </Route>
                <Route path={'/tasks/:taskId'}>
                    <TaskDetail {...props}></TaskDetail>
                </Route>
            </Switch>
        </main>
    );
}