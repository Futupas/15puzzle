'use strict';
let Puzzle = [
    [ {}, {}, {}, {} ],
    [ {}, {}, {}, {} ],
    [ {}, {}, {}, {} ],
    [ {}, {}, {}, {} ]
];

// i,j - картинка ячейки (ее положение) (не меняется)
// x,y - положение ячейки (меняется)
// Puzzle[0][0] - пустая ячейка
// i, x - по горизонтали; j,x - по вертикали

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
        Puzzle[i][j] = { x: i, y: j };
    }
}

function Draw () {
    let imgsrc = './puzzleimage.png';
    document.getElementById('puzzlediv').innerHTML = '';
    
    //let divs = [4,4];
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            let div = document.createElement('div');
            div.style.left = (Puzzle[i][j].x)*128 + 'px';
            div.style.top = (Puzzle[i][j].y)*128 + 'px';
            div.setAttribute('data-ij', (i+''+j));
            div.setAttribute('data-xy', (Puzzle[i][j].x+''+Puzzle[i][j].y));
            
            let img = document.createElement('img');

            if (i == 0 && j == 0) {
                img.style.backgroundColor = '#ffffff';
                img.src = '';
            } else {
                img.src = imgsrc;
                img.style.left = (i)*-128 + 'px';
                img.style.top = (j)*-128 + 'px';
            }

            div.appendChild(img);

            document.getElementById('puzzlediv').appendChild(div);
        }
    }
}

function SetEmtry (x, y) {
    var changed = { x: Puzzle[x][y].x, y: Puzzle[x][y].y};
    var emtry = { x: Puzzle[0][0].x, y: Puzzle[0][0].y};

    Puzzle[x][y].x = emtry.x;
    Puzzle[x][y].y = emtry.y;
    Puzzle[0][0].x = changed.x;
    Puzzle[0][0].y = changed.y;
}