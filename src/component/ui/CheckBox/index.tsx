import React from "react";
import styles from "./checkbox.module.scss";

import cn from "classnames";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    label: string,
    setCheck: (checked: boolean) => void;
    isChecked: boolean
}

export default function CheckBox({label, className, setCheck, isChecked}: IProps) {
    return (
        <label className={cn(styles.label, className)}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setCheck(e.target.checked)}
            />
            {label}
        </label>
    );
};
