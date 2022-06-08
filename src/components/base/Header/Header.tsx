import React from 'react'
import styles from './styles.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <h2>GameStore</h2>
            <Link className={styles.header__link} to={'/games'}>Games</Link>
            <p>Profile</p>
        </div>
    );
};

export default Header;
