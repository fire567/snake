import React from "react";
import { connect } from "react-redux";
import { setCount, setIsBusted } from "../../actions";
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import "./PopUp.css";

const PopUp = ({count, setCount, setIsBusted}) => {
    const history = useHistory()

    if(JSON.parse(localStorage.getItem("result"))){
        const results = [...JSON.parse(localStorage.getItem("result"))]
        results[results.length] = {
            points: count, 
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString().slice(0,-3)}`
        }
        console.log(results)
        localStorage.setItem("result", JSON.stringify(results));
    }else{
        localStorage.setItem("result", JSON.stringify([{
            points: count, 
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString().slice(0,-3)}`
        }]));
    }



    const agreeHandler = () => {
        setIsBusted(false)
        setCount(0)
    }

    const declineHandler = () => {
        setIsBusted(false)
        setCount(0)
        history.push("/")
    }

    return (
        <div className="popup-form">
            <div className="popup-content">
                <div className="popup-header">
                    Вы проиграли
                </div>
                <div className="progress-inf">
                    Вы набрали: {count} {count === 1 ? "очко" : "очков"}
                </div>
                <div className="footer-form">
                    Хотите продолжить?
                    <div className="buttons">
                        <button className="agree-btn" onClick={agreeHandler}>Принять</button>
                        <button className="decline-btn" onClick={declineHandler}>Выход</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        count: state.count,
        isBusted: state.isBusted,
    }
}

export default connect(mapStateToProps, {
    setCount: setCount,
    setIsBusted: setIsBusted,
})(PopUp);