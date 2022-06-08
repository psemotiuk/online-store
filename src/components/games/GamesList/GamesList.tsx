import React from 'react';
import styles from './styles.module.scss';
import GameCard from "../GameCard/GameCard";


const GamesList = ({games}: any) => {
    return (
        <div className={styles.gamesList}>
            {games.map(({imgSrc, title, price}: any) => (
                <GameCard imgSrc={imgSrc} title={title} price={price}/>
            ))}
        </div>
    );
};

export default GamesList;
