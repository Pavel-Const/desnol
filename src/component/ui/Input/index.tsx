"use client";
import styles from "./input.module.scss";
import ShowIcon from "/public/images/svg/password-show.svg";
import HideIcon from "/public/images/svg/password-hide.svg";

import cn from "classnames";
import {useState} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    error?: string,
    type?: string
}

export default function Input({placeholder, error, type, ...rest}: IProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === 'password';
    return (
        <div className={styles.field}>
            <input
                className={cn(styles.input, error && styles.input_error)}
                placeholder={placeholder}
                type={isPasswordType && showPassword ? 'text' : type}
                {...rest}
            />
            {isPasswordType && (
                <div className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <HideIcon/> : <ShowIcon/>}
                </div>
            )}
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
