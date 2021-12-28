import React from "react";
import { connect } from "react-redux";
import {isStart} from "../../actions/index"
import "./Header.css";

const Header = ({isStartedReducer, isStart, count}) => {

    console.log(isStartedReducer)

    return(
        <header className="header-form">
            <div className="points">
                Ваши очки: {count}
            </div>
            <button onClick={() => isStart(true)}>
                Начать
            </button>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        isStartedReducer: state.isStartedReducer,
        count: state.count
    }
}

export default connect(mapStateToProps, {
    isStart: isStart,
})(Header);