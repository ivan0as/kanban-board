import css from './btn-add-card.module.css';
import plus from '../main/plus.svg';

export default function BtnAddCard() {
    return (
        <div>
            <img className={css.img} src={plus} alt='+'/>
            <span>Add card</span>
        </div>
    );
}