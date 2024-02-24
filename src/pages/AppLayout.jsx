import AppNav from "../componenets/AppNav";
import Map from "../componenets/Map";
import Sidebar from "../componenets/Sidebar";
import User from "../componenets/User";

import styles from './AppLayout.module.css'
export default function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    )
}
