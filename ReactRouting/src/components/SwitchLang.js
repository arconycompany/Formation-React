import React from 'react';
import { useDispatch } from 'react-redux';
import { switchLang } from '../store/actions/app';

export const SwitchLang = () => {
  const dispatch = useDispatch();
  const onChange = (locale) => dispatch(switchLang(locale));

  return (
    <select onChange={(event) => onChange(event.target.value)}>
      <option value="fr">fr</option>
      <option value="en">en</option>
    </select>
  );
};
