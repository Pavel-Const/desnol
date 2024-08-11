"use client";
import styles from "./searchInput.module.scss";
import SearchIcon from "/public/images/svg/search-icon.svg";
import CrossIcon from "/public/images/svg/cross-icon.svg";
import cn from "classnames";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string,
    error?: string,
    type?: string
    setValue: (value: string)=> void
}

export default function SearchInput({value, setValue, ...rest}: IProps) {

    return (
        <div className={styles.field}>
            <input
                className={cn(styles.input)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...rest}
            />
            <div className={styles.search}><SearchIcon/></div>
            <button className={styles.cross} onClick={() => setValue('')}><CrossIcon/></button>
        </div>
    );
}
