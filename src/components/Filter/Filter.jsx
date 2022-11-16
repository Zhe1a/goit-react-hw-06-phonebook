import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={s['heder']}>
      <input
        value={filter}
        className={s['input']}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
}

export default Filter;
