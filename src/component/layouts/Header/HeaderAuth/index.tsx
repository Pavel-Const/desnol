"use client";
import styles from "./headerAuth.module.scss";
import Image from "next/image";
import Button from "@/component/ui/Button";
import Link from "next/link";
import cn from "classnames";
import {usePathname} from "next/navigation";
export default function HeaderAuth() {
    const pathname = usePathname();
    
    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                <Link href={'/messages'} className={cn(styles.item, pathname === '/messages' && styles.item_active) }>
                    Уведомления
                </Link>
                <Link href={'/petition'} className={cn(styles.item, pathname === '/petition' && styles.item_active) }>
                    Обращения
                </Link>
            </nav>
            <div className={styles.actions}>
                <Button className={styles.createPetition} variant={'blackPlus'}>Новое обращение</Button>
                <Image src={'/images/avatar.jpg'} alt={'avatar'} width={80} height={80} className={styles.avatar}></Image>
            </div>
        </div>
    );
}
