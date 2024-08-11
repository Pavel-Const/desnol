import styles from "./button.module.scss";
import {ReactNode} from "react";
import cn from "classnames";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    variant: "black" | "white" | "blackPlus",
    active?: boolean
}

export default function Button({children, className, variant = "black", active, ...rest}: IProps) {
    return (
        <button
            className={cn(styles.button, className, styles[variant], active && styles.active)}
            {...rest}
        >
            {variant === 'blackPlus' && '+ |'}
            {children}
        </button>
    );
};
