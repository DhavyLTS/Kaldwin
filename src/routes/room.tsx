import styles from "../styles/Room.module.scss"

import SideBarButton from "../components/sideBarButton";
import SideBar from "../components/sideBar";
import Canvas from "../components/canvas";


import PawClaws from "../assets/paw-claws.svg?react";
import Settings from "../assets/settings.svg?react";
import Users from "../assets/users-alt.svg?react";
import Dice20 from "../assets/dice-d20.svg?react";
import Leave from "../assets/leave.svg?react";

export default function Room() {
    return <div className={styles.container}>
        <SideBar>
            <SideBarButton svg={<Dice20 />} />
            <SideBarButton svg={<Users />} />
            <SideBarButton svg={<PawClaws />} />
            <SideBarButton />
            <SideBarButton />
            <SideBarButton bottom svg={<Settings />} />
            <SideBarButton type="leave" svg={<Leave />} />
        </SideBar>

        <Canvas>

        </Canvas>
    </div>
}