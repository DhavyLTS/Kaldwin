import styles from '../styles/SideBar.module.scss'
import React from "react"

type props = {
    children: React.ReactNode;
}

export default function SideBar(props: props) {
    return <div className={styles.container}>
        {props.children}
    </div>
}