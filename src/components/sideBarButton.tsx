import React from 'react'
import styles from '../styles/SideBarButtons.module.scss'

type props = {
    bottom?: boolean;
    svg?: React.ReactNode;
    type?: "normal" | "leave";
}

export default function SideBarButton({ type = "normal", svg, bottom }: props) {
    return <div
        className={styles[type]}
        style={bottom ? { marginTop: "auto" } : {}}
    >
        {svg}
    </div>
}