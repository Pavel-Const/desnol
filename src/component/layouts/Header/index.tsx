"use client";
import styles from "./header.module.scss";
import Image from "next/image";
import {AuthContext} from "../../AuthProvider";
import {useContext} from "react";
import HeaderAuth from "@/component/layouts/Header/HeaderAuth";

export default function Header() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Header must be used within an AuthProvider");
    }
    const {auth, count} = context;
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={"/images/logo.jpg"} width={200} height={80} alt={"logo"}/>
            </div>
            {auth ? <HeaderAuth count={count}/> : ""}
        </header>
    );
}
