import { useState } from 'react';
import FormUserDropdownMenu from '../form-user-dropdown-menu';
import css from './header.module.css';
import css_app from '../app/app.module.css';
import user_avatar from './user-avatar.svg';
import vector from './Vector.svg';

export default function Header() {

    const [isFormVisible, setFormVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    return (
        <header className={css.header}>
            <div className={css_app.container+" "+css.header_content}>
                <p className={css.h1}>Awesome Kanban Board</p>
                <button className={css.user_menu} onClick={handleClick}>
                    <img src={user_avatar} alt='Profile' className={css.user_avatar}/>
                    <img src={vector} alt='vector' className={css.vector + ' ' + (isFormVisible ? css.vector_active : '')}/>
                </button>
                {isFormVisible && (
                <FormUserDropdownMenu/>
                )}
            </div>
        </header>
    );
}