"use client";
import styles from "./page.module.scss";
import {useCallback, useMemo, useState} from "react";
import {petitions} from "@/app/petition/mockPetition";
import Button from "@/component/ui/Button";
import cn from "classnames";
import SearchInput from "@/component/ui/SearchInput";
import PetitionItem from "@/component/petition-page/PetitionItem";
import Pagination from "@/component/ui/Pagination";

export default function Petitions() {
    const [activeFilter, setActiveFilter] = useState("Все");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const itemsPerPage = 7;
    
    const handleFilterClick = useCallback((filter: string) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    }, []);
    
    const getFilteredData = () => {
        if (activeFilter === "Все") {
            return petitions;
        }
        if (activeFilter === "Открытые") {
            return petitions.filter(item => item.status === "В работе" || item.status === "На согласовании");
        }
        if (activeFilter === "Закрытые") {
            return petitions.filter(item => item.status === "Зарегистрировано" || item.status === "Выполнено. Требует подтверждения");
        }
        if (activeFilter === "Ожидают ответа") {
            return petitions.filter(item => item.waiting);
        }
        return petitions;
    };
    
    const filteredData = useMemo(() => getFilteredData(), [activeFilter, petitions]);
    
    const totalPages = useMemo(() => Math.ceil(filteredData.length / itemsPerPage), [filteredData.length, itemsPerPage]);
    
    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
        return currentItems.map((item, index) => (
            <PetitionItem item={item} key={item.id + index}/>
        ));
    };
    
    
    return (
        <main className={cn(styles.main, "container")}>
            <div className={styles.head}>
                <div className={styles.search}>
                    <SearchInput value={searchValue} setValue={setSearchValue}/>
                </div>
                <div className={styles.filters}>
                    {["Все", "Открытые", "Закрытые", "Ожидают ответа"].map((filter) => (
                        <Button
                            key={filter}
                            className={styles.filterBtn}
                            variant={"white"}
                            active={activeFilter === filter}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Тема</th>
                    <th>Номер</th>
                    <th>Дата создания</th>
                    <th>Дата изменения</th>
                    <th>Крайний срок</th>
                    <th>Состояние</th>
                </tr>
                </thead>
                <tbody>
                {renderTableRows()}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}
                        className={styles.pagination}/>
        </main>
    );
}
