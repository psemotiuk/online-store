import React from 'react';
import styles from './styles.module.scss';

interface IProps {
    imgSrc: string;
    title: string;
    price: string
}

const GameCard = ({imgSrc, title, price}: IProps) => {
    console.log('src', imgSrc)
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={imgSrc} alt={title} />
            <p className={styles.card__title}>{title}</p>
            <p>{price}</p>
        </div>
    );
};

export default GameCard;
