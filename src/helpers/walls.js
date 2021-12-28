const walls = () => {
    let wall = [];
    let up = [];
    let down = [];
    let right = [];
    let left = [];

    for(let i = 0; i <= 29; i++){
        wall.push(i);
    }

    for(let i = 0; i <= 30; i++){
        if(i === 0){
            down[i] = 840
            wall.push(i);
        }else{
            down[i] = down[i - 1] + 1;
            wall.push(down[i]);
        }
        
    }
    for(let i = 0; i <= 29; i++){
        if(i === 0){
            right[i] = 29
            wall.push(i);
        }else
        right[i] = right[i - 1] + 30;
        wall.push(right[i]);
    }
    for(let i = 0; i <= 29; i++){
        if(i === 0){
            wall.push(0)
            left[i] = 0;
        }else
        left[i] = left[i - 1] + 30;
        wall.push(left[i])
    }

    //wall.push(up, down, right, left)

    return wall
}

export default walls;