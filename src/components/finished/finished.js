import css_main from '../main/main.module.css';
import plus from '../main/plus.svg';

export default function Finished() {
    return (
        <div className={css_main.block_task}>
            <h2 className={css_main.title_task}>Finished</h2>
            <button className={css_main.button_add_card}>
                <img src={plus} alt='+'/>
                Add card
            </button>
        </div>
    );
}