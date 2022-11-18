import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilter } from 'redux/contacts/filtersSlice';

function Filter() {
  const { filters } = useSelector(state => state);

  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    const {value} = e.target
    dispatch(statusFilter(value))
  };;

  return (
    <div className={s['heder']}>
      <input
        value={filters.status}
        className={s['input']}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
}

export default Filter;
