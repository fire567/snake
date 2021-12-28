const changePosition = (
    one, 
    two, 
    three, 
    four, 
    five, 
    six, 
    seven, 
    eight, 
    currentPosition, 
    direction, 
    setDirection, 
    setIsBusted, 
    walls,
    position
    ) => {
        let positionn = position()
        let leftWals = walls()
        const isWall = () => {
            for(let i = 0; i < leftWals.length; i++){
                if(currentPosition[0] === leftWals[i]){
                    if(i === 0) positionn[0] = 100
                    else positionn[i] = positionn[i - 1] + 1
                    setDirection("left")
                    setIsBusted(true)
                    return positionn;
                } 
            }
        }
        isWall()

        const isSnakePart = () => {
            for(let i = 0; i < currentPosition.length; i++){
                if( i !== 0 && currentPosition[0] === currentPosition[i]){
                    if(i === 0) positionn[0] = 100
                    else positionn[i] = positionn[i - 1] + 1
                    setDirection("left")
                    setIsBusted(true)
                    return positionn;
                }
            }
        }
        isSnakePart()
       
                if(direction === "left"){
                    
                        let test = []
                        for(let i = 0; i < currentPosition.length; i++){
                            if(i === 0) test[0] = currentPosition[0] - 1;
                            else test[i] = currentPosition[i - 1]
                        }
                    return test;
                
                }else if(direction === "up"){
                    
                        for(let i = 0; i < currentPosition.length; i++){
                            if(i === 0) positionn[0] = currentPosition[0] - 30;
                            else positionn[i] = currentPosition[i - 1]
                        }
                    return positionn;
                
                }else if(direction === "down"){
                    
                        for(let i = 0; i < currentPosition.length; i++){
                            if(i === 0) positionn[0] = currentPosition[0] + 30;
                            else positionn[i] = currentPosition[i - 1]
                        }
                    return positionn;
                  
                }else if(direction === "right"){

                        for(let i = 0; i < currentPosition.length; i++){
                            if(i === 0) positionn[0] = currentPosition[0] + 1;
                            else positionn[i] = currentPosition[i - 1]
                        }
                    return positionn;
                
                }
        //}
    }

    export default changePosition;