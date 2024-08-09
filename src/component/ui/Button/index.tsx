import styles from "./button.module.scss";
import {ReactNode} from "react";
import cn from "classnames";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
}

export default function Button({children, className, ...rest}: IProps) {
    return (
        <button
            className={cn(styles.button, className)}
            {...rest}
        >
            {children}
        </button>
    );
};
