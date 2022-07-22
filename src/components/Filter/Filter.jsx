import { changeFilter } from 'redux/contacts/actions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = ({ title }) => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span className={s.label__title}>{title}</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
