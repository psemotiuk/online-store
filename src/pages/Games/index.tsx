import React from 'react';
import GamesList from "../../components/games/GamesList/GamesList";
import styles from './styles.module.scss'
import Filter from "../../components/filters/Filter";

const games = [
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    }, {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
    {
        imgSrc: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png',
        title: 'FIFA 22',
        price: '100'
    },
]
const Games = () => {
    return (
        <div className={styles.pageContainer}>
            <GamesList games={games}/>
            <Filter />
        </div>
    );
};

export default Games;
