import React, {useState, useEffect} from "react";
import arrayCells from "../../helpers/arrayCells";
import changePosition from "../../helpers/changePosition";
import walls from "../../helpers/walls";
import Cells from "../Cells/Cells";
import PopUp from "../PopUp/PopUp";
import { isStart, setCount, setIsBusted } from "../../actions";
import { connect } from "react-redux";
import "./Field.css";

const Field = ({isStartedReducer, isStart, setCount, count, isBusted, setIsBusted}) => {
    const [ currentPosition, setCurrentPosition] = useState([100])
    const [ direction, setDirection ] = useState("left")
    const [food, setFood] = useState(98)
    const [ speed, setSpeed ] = useState(300)
    const [last, setLast] = useState(parseInt(currentPosition[currentPosition.length - 1]))

    
    useEffect(() => {
        if(isBusted){
            setDirection("left")
            setCurrentPosition([100])
            setFood(25)
            isStart(false)
            setSpeed(300)
        }
    }, [isBusted])

    useEffect(() => {
        const wallss = walls()

        for(let i = 0; i < wallss.length; i++){
            if(wallss[i] === food){
                setFood(Math.floor(Math.random() * 840))
            }
        }
    }, [food])

    useEffect(() => {
        if( currentPosition.length % 2 == 0 ){
            setSpeed(speed / 1.2)
        }
    }, [count])


    const handleArrowKey = (key) => {
        if(key.key === "ArrowRight"){
            setDirection("right")
        }else if(key.key === "ArrowLeft"){
            setDirection("left")
        }else if(key.key === "ArrowUp"){
            setDirection("up")
        }else if(key.key === "ArrowDown"){
            setDirection("down")
        }
        
    }

    const lasPos = () => {
        setLast(parseInt(currentPosition[currentPosition.length - 1]))
        return last
    }
    
    useEffect(() => {
        if(isStartedReducer){
            if(currentPosition[0] !== food){
                setTimeout(() => {
                    if(direction === "left"){
                        setCurrentPosition(
                            changePosition(0, 8, 16, 24, 32, 40, 48, 56, currentPosition, direction, setDirection, setIsBusted, walls,() => {
                                let mewPos = [];
                                for(let i = 0; i < currentPosition.length; i++){
                                    mewPos[i] = currentPosition[i - 1];
                                }
                                
                                return mewPos
                                
                            })
                    )
                    }else if(direction === "right"){
                        setCurrentPosition(
                        changePosition(7, 15, 23, 31, 39, 47, 55, 63, currentPosition, direction, setDirection, setIsBusted, walls, () => {
                            let mewPos = [];
                            for(let i = 0; i < currentPosition.length; i++){
                                mewPos[i] = currentPosition[i - 1];
                            }
                            
                            return mewPos
                        })
                    )
                    }else if(direction === "up"){
                        setCurrentPosition(
                        changePosition(0, 1, 2, 3, 4, 5, 6, 7, currentPosition, direction, setDirection, setIsBusted, walls,() => {
                            let mewPos = [];
                            for(let i = 0; i < currentPosition.length; i++){
                                mewPos[i] = currentPosition[i - 1];
                            }
                            
                            return mewPos
                        })
                    )
                    }else if(direction === "down"){
                        setCurrentPosition(
                        changePosition(56, 57, 58, 59, 60, 61, 62, 63, currentPosition, direction, setDirection, setIsBusted, walls,() => {
                            let mewPos = [];
                            for(let i = 0; i < currentPosition.length; i++){
                                mewPos[i] = currentPosition[i - 1];
                            }
                            
                            return mewPos
                        })
                        )
                    }
                    
                }, speed)
            }
                else if(currentPosition[0] === food){
                    setCount(count + 1)
                    if(direction === "left"){
                        setCurrentPosition(() => {
                            let mewPos = [...currentPosition];
                            mewPos.push(lasPos)
                            
                            return mewPos
                        })
                        setFood(Math.floor(Math.random() * 840))
                    }else if(direction === "up"){
                        setCurrentPosition(() => {
                            let mewPos = [...currentPosition];
                            mewPos.push(lasPos)
                            return mewPos
                        })
                        setFood(Math.floor(Math.random() * 840))
                    }else if(direction === "down"){
                        setCurrentPosition(() => {
                            let mewPos = [...currentPosition];
                            mewPos.push(lasPos)
                            return mewPos
                        })
                        setFood(Math.floor(Math.random() * 840))
                    }else if(direction === "right"){
                        setCurrentPosition(() => {
                            let mewPos = [...currentPosition];
                            mewPos.push(lasPos)
                            return mewPos
                        })
                        setFood(Math.floor(Math.random() * 840))
                    }
                }
            }
    }, [currentPosition, isStartedReducer])

    useEffect(() => {
        document.addEventListener("keydown", handleArrowKey, false);
    }, [])

    const positione = (index) => {
        for(let i = 0; i < currentPosition.length; i++){
            if(index === currentPosition[i]){
                return currentPosition[i]
            }
        }
    }

    return (
        <div className = "field-form">
            {arrayCells.map((el, index) => (
                <Cells key={index} currentPosition={positione(index)} index={index} food={food}/>
            ))}
            {isBusted === true ? <PopUp /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isStartedReducer: state.isStartedReducer,
        count: state.count,
        isBusted: state.isBusted,
    }
}

export default connect(mapStateToProps, {
    isStart: isStart,
    setCount: setCount,
    setIsBusted: setIsBusted
})(Field);