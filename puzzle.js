'use strict';
let Puzzle = [[],[],[],[]];

// let pCell = {
//     c: [,]
//     //, img: ''
// };

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
        Puzzle[i][j] = { x: 3-i, y: j };
        //console.log (i + ' ' + j);
        //console.log (Puzzle[i][j].x + ' ' + Puzzle[i][j].y);
    }
}


//console.log ('--');

function Draw () {
    let imgsrc = './puzzleimage.png';
    //let divs = [4,4];
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            //console.log (i + ' ' + j);
            let div = document.createElement('div');
            div.style.left = (Puzzle[i][j].x)*128 + 'px';
            div.style.top = (Puzzle[i][j].y)*128 + 'px';
            
            //console.log (i + ' ' + j);
            //console.log (Puzzle[i][j].x + ' ' + Puzzle[i][j].y);

            let img = document.createElement('img');
            img.src = imgsrc;
            img.style.left = (i)*-128 + 'px';
            img.style.top = (j)*-128 + 'px';

            div.appendChild(img);

            document.getElementById('puzzlediv').appendChild(div);
        }
    }
}

//Puzzle[0][0] = {x: 1, y: 1};
//Puzzle[1][1] = {x: 0, y: 0};
//Draw();
