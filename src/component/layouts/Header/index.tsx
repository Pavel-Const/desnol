"use client";
import styles from "./header.module.scss";
import Image from "next/image";
import {AuthContext} from "../../AuthProvider";
import {useContext} from "react";
import HeaderAuth from "@/component/layouts/Header/HeaderAuth";
import cn from "classnames";
import Link from "next/link";

export default function Header() {
    const context = useContext(AuthContext);
    if (!context) return;
    const {auth} = context;
    
    return (
        <header className={styles.header}>
            <div className={cn(styles.content, "container")}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.jpg"} width={200} height={80} alt={"logo"}/>
                </Link>
                {auth ? <HeaderAuth/> : ""}</div>
        </header>
    );
}
