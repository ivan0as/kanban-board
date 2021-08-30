import css from './footer.module.css';
import css_app from '../app/app.module.css';

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css_app.container+" "+css.footer_content}>
                <div>
                    <p>Active tasks: N</p>
                    <p>Finished tasks: M</p>
                </div>
                <p>Kanban board by NAME, YEAR</p>
            </div>
        </footer>
    );
}