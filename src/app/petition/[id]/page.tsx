"use client";
import styles from "./page.module.scss";
import {petitions} from "@/app/petition/mockPetition";
import ArrowIcon from "/public/images/svg/arrow-down.svg";

import Button from "@/component/ui/Button";
import {useState} from "react";
import cn from "classnames";
import {useRouter} from "next/navigation";


export default function PetitionsDetail({params}: { params: { id: number } }) {
    const router = useRouter();
    const currentPetition = petitions.find(item => item.id === +params.id);
    const [showFull, setShowFull] = useState(false);
    const handleBack = () => {
        router.back();
    };
    return (
        <main className={cn(styles.main, "container")}>
            <Button variant={"white"} className={styles.btnBack} onClick={handleBack}>Назад</Button>
            <div className={styles.content}>
                <div className={styles.block}>
                    <div className={styles.column}>
                        <div className={styles.number}>Обращение
                            № {currentPetition?.number} от {currentPetition?.dateCreate}</div>
                        <div className={styles.label}>{currentPetition?.label}</div>
                        <div className={styles.description}>{currentPetition?.description}</div>
                    </div>
                    <div className={styles.columnLeft}>
                        <div className={styles.status}>{currentPetition?.status}</div>
                        <div className={styles.box}>
                            <div className={styles.item}>
                                <div className={styles.item__name}>Крайний срок</div>
                                <div className={styles.item__value}>{currentPetition?.dateWrong}</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item__name}>Решение</div>
                                <div className={styles.item__value}>{currentPetition?.result}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {showFull && <div className={styles.showMore}>
                    <div className={styles.service}>{currentPetition?.service}</div>
                    <div className={styles.comService}>{currentPetition?.comService}</div>
                </div>}
                <button className={cn( styles.showMoreBtn, showFull && styles.showMoreBtn_rotate)} onClick={() => {setShowFull(!showFull)}}>
                    <ArrowIcon/>
                </button>
            </div>
            <div className={styles.tool}>Если остались вопросы, пожалуйста, создайте новое обращение</div>
        </main>
    );
}
