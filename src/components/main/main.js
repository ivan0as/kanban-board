import css from './main.module.css';
import css_app from '../app/app.module.css';
import Backlog from '../backlog';
import Ready from '../ready';
import Progress from '../progress';
import Finished from '../finished';

export default function Footer() {
    return (
        <main className={css.main}>
            <div className={css_app.container+' '+css.main_content}>
                <Backlog />
                <Ready/>
                <Progress/>
                <Finished/>
            </div>
        </main>
    );
}