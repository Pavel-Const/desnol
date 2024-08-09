"use client";
import styles from "./input.module.scss";
import cn from "classnames";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}

export default function Input({placeholder, ...props}: IProps) {
    return (
        <input
            className={cn(styles.input)}
            type="text"
            {...props}
            placeholder={placeholder}
        />
    );
}
