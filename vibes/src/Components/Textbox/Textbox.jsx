import React from 'react'
import { useTheme } from '../../Contexts';
import style from './Textbox.module.css';

const Textbox = (props) => {
    const { themeState } = useTheme();
    const { mode } = themeState;
    const { label, type, name, value, error } = props;
    const labelMode = mode==="light" ? style.label_light : style.label_dark;
  return (
    <fieldset className={`${style.text_fieldset}  ${error && style.error_fieldset}`}>
        <legend htmlFor={name} className={`${labelMode} ${style.text_label}`}>{label} <span className="text-span">*</span></legend>
        <input type={type} name={name} value={value} {...props} className={`${labelMode} ${style.text_input}`}/>
    </fieldset>
  )
}

export { Textbox };