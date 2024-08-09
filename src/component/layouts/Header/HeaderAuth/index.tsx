"use client";
import styles from "./headerAuth.module.scss";
import Image from "next/image";
import Button from "@/component/ui/Button";
export default function HeaderAuth({count}: {count: number}) {
    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                
                <div className={styles.item}>
                    Уведомления
                </div>
                <div className={styles.item}>
                    Обращения <span className={styles.count}>{count}</span>
                </div>
            </nav>
            <div className={styles.actions}>
                <Button className={styles.createPetition}>Новое обращение</Button>
                <Image src={'/images/avatar.jpg'} alt={'avatar'} width={80} height={80} className={styles.avatar}></Image>
            </div>
        </div>
    );
}
