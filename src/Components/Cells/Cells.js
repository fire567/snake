import React from "react";
import walls from "../../helpers/walls";
import "./Cells.css";

const wallss = walls()
console.log(wallss)

const Cells = ({currentPosition, index, food}) => {



    const putCell = () => {
            for(let i = 0; i < wallss.length; i++){
                if(wallss[i] === index){
                    return "hidden-cell"
                }
            }

            if(currentPosition || currentPosition === 0){
                return "current-cell-form"
            }else if(food && food === index || food === 0){
                return "current-cell-form"
            }else{
                return "cells-form"
            }
    }

    return(
        <div className = {putCell()}>
            
        </div>
    )
}

export default Cells;