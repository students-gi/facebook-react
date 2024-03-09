// Copied from Abdul Basit On
// https://www.codevertiser.com/reusable-input-component-react/
import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';

type InputType = 'text' | 'number' | 'email' | 'password'
interface InputProps {
  type: InputType,
  name: string,
  label: string,
  value?: string | number,
  placeholder: string,
  disabled?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  type,
  name,
  label,
  value,
  placeholder,
  disabled,
  onChange
}: InputProps) {
  return (
    <div className={`${styles.input}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
