import React, {useEffect} from 'react';
import GamesList from "./components/GamesList";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {fetchGamesRequest, fetchGamesSuccess} from "./store/actions/gameAction";
import Home from "./pages/Home";
import AppRouter from "./routes";
import Header from "./components/base/Header/Header";


const App = () => {
    const games = useSelector((state: { games: { games: [] } }) => state.games)
    const dispatch = useDispatch();

    //
    // useEffect(() => {
    //     dispatch(fetchGamesRequest())
    // }, [])
    // useEffect(() => {
    //
    //     console.log('games', games)
    // }, [games])
    return (
        <>
            <Header/>
            <AppRouter/>
        </>

    )
    // // games.games.length > 0 ?
    // //     <div>
    //         <GamesList games={games.games}/>
    //     </div>
    //     :
    //     <p>
    //         loading ...
    //     </p>

    {/*<Header/>*/

    }


}

export default App;
