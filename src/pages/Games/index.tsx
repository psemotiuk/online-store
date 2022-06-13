import React, {useEffect} from 'react';
import GamesList from "../../components/games/GamesList/GamesList";
import styles from './styles.module.scss'
import Filter from "../../components/filters/Filter";
import {useDispatch, useSelector} from "react-redux";
import {fetchGamesRequest} from "../../store/actions/gameAction";
import {GamesState, IGame} from "../../types/gameTypes";

const gamesMocked = [
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
    const dispatch = useDispatch();
    const games = useSelector((state: any) => state.games.games)
    const gamesFromStore = JSON.parse(localStorage.getItem('games') || '{}')
    useEffect(() => {
        try {
            dispatch(fetchGamesRequest())
        }
        catch (e) {
            alert('where are in offline mode')
        }

    }, [])

    useEffect(() => {
        console.log('gamesInComponent', games)
    }, [games])
    return (
        gamesFromStore ?
            <div className={styles.pageContainer}>
                <GamesList games={gamesFromStore}/>
                <Filter/>
            </div>
            :
            <p>Loading...</p>
    );
};

export default Games;
