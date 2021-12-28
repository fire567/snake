import React from "react";
import logo from "../../assets/snake.png"
import play from "../../assets/play.png"
import { useHistory } from 'react-router-dom';
import Scores from "../Scores/Scores";
import "./MainPage.css";

const MainPage = () => {
    const history = useHistory()

    const toGameHandler = () => {
        history.push("/game")
    }

    return(
        <>
            <div className="brand-form">
                <div className="logo-form">
                    <img width="50" height="50" src={logo} />
                </div>
                <div className="brand-name">
                    SnakeGame
                </div>
            </div>
            <div className="content-form">
                <div className="button-form" onClick={toGameHandler}>
                    <img width="100" height="100" src={play} />
                </div>
                <div className="btn-description">
                    Начать
                </div>
            </div>
            <Scores />
        </>
    )
}

export default MainPage;