import css from './form-user-dropdown-menu.module.css';

export default function FormUserDropdownMenu() {
    return (
        <>
            <div className={css.arrow}></div>
            <div className={css.dropdown}>
                <ul className={css.dropdown_select}>
                    <li className={css.dropdown_option}>Profile</li>
                    <li className={css.dropdown_option}>Log Out</li>
                </ul>
            </div>
        </>
    );
}