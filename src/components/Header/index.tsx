import ModalVideo from "components/ModalVideo";
import { NavPanel } from "components/NavPanel";

import styles from "./header.module.scss";

const Header = () => (
    <header className={styles.header}>
        <NavPanel />
        <ModalVideo />
    </header>
);

export default Header;
