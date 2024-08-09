"use client";
import styles from "./page.module.scss";
import {useFormik} from "formik";
import {validateForm} from "@/utils/validationShema";
import Input from "@/component/ui/Input";
import CheckBox from "@/component/ui/CheckBox";
import {useContext, useState} from "react";
import Button from "@/component/ui/Button";
import {useRouter} from "next/navigation";
import {AuthContext} from "@/component/AuthProvider";

export default function Home() {
    
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Header must be used within an AuthProvider');
    }
    const { auth, toggleAuth } = context;
    const router = useRouter();
    const [checkRemember, setCheckRemember] = useState(false)
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validate: validateForm,
        onSubmit: values => {
            console.log(values);
            router.push('/petition');
        }
    });
    return (
        <main className={styles.main}>
            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
                <div className={styles.title}>Вход в сервис</div>
                <div className={styles.fields}>
                    <Input placeholder={"Логин"} name={'login'} type={'text'}
                           onChange={formik.handleChange}
                           value={formik.values.login}
                           onBlur={formik.handleBlur}/>
                    <Input placeholder={"Пароль"} name={'password'} type={'password'}
                           onChange={formik.handleChange}
                           value={formik.values.password}
                           onBlur={formik.handleBlur}
                    />
                </div>
                <CheckBox label={"Запомнить меня"} isChecked={checkRemember} setCheck={setCheckRemember} className={styles.checkbox}/>
                <Button type={'submit'} className={styles.buttonEnter} onClick={toggleAuth}>Войти</Button>
            </form>
            <button className={styles.button}>Забыли пароль?</button>
        </main>
    );
}
