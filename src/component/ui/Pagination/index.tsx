import styles from "./pagination.module.scss";
import cn from "classnames";
import {useState} from "react";

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className: string;
}

export default function Pagination({currentPage, totalPages, onPageChange, className}: IPaginationProps) {
    const [showAllPages, setShowAllPages] = useState<boolean>(false);
    const renderPages = () => {
        const pages = [];
        if (showAllPages || totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <button
                        key={i}
                        className={cn(styles.paginationBtn, currentPage === i && styles.paginationBtn_active)}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            for (let i = 1; i <= 3; i++) {
                pages.push(
                    <button
                        key={i}
                        className={cn(styles.paginationBtn, currentPage === i && styles.paginationBtn_active)}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
            
            pages.push(<button key="ellipsis" className={styles.ellipsis}
                               onClick={() => setShowAllPages(true)}>...</button>);
            
            pages.push(
                <button
                    key={totalPages}
                    className={cn(styles.paginationBtn, currentPage === totalPages && styles.paginationBtn_active)}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }
        
        return pages;
    };
    if (totalPages > 1) {
        return (
            <div className={cn(styles.pagination, className)}>
                {renderPages()}
            </div>
        );
    }
};
