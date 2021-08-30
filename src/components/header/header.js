import css from './header.module.css';
import css_app from '../app/app.module.css';
import user_avatar from './user-avatar.svg';
import vector from './Vector.svg';

export default function Header() {
    return (
        <header className={css.header}>
            <div className={css_app.container+" "+css.header_content}>
                <p className={css.h1}>Awesome Kanban Board</p>
                <button className={css.user_menu}>
                    <img src={user_avatar} alt='Profile' className={css.user_avatar}/>
                    <img src={vector} alt='vector' className={css.vector}/>
                </button>
            </div>
        </header>
    );
}