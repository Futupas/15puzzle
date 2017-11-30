'use strict';

// class
function Puzzle15 (options, styles) {
    this._Puzzle = [];
    // constructor
    this._size = {
        rows: options.size.rows || 4,
        cols: options.size.cols || 4,
        width: options.size.width || 512,
        height: options.size.height || 512
    };
    this._image = options.image || '';
    this._container = options.container || '#puzzlediv';
    this._emtry = {
        x: options.emtry.x || 0,
        y: options.emtry.y || 0,
        element: null
    };
    this._styles = {
        animation: {
            duration: styles.animation.duration || 300,
            function: styles.animation.function || 'linear'
        },
        emtry: {
            color: styles.emtry.color || '#ffffff',
            image: styles.emtry.image || undefined
        },
        border: {
            width: styles.border.width || 0,
            style: styles.border.style || 'solid',
            color: styles.border.color || '#000000'
        }
    };
}

Puzzle15.prototype.Draw = function () { // Draws puzzle with everyting (filling Puzzle too)
    // ===== Fill Puzzle
    for (let i = 0; i < this._size.cols; i++) { // cols
        let col = [];
        for (let j = 0; j < this._size.rows; j++) { // rows
            col.push({x: i, y: j});
        }
        this._Puzzle.push(col);
    }
    
    // ===== Set styles
    let styles = '';
    let container = [];
    /**/container.push('position: relative;');
    /**/container.push('width: ' + this._size.width + 'px;');
    /**/container.push('height: ' + this._size.height + 'px;');
    let div = [];
    /**/div.push('position: absolute;');
    /**/div.push('top: 0px;');
    /**/div.push('left: 0px;');
    /**/div.push('overflow: hidden;');
    /**/div.push('width: '+Math.floor(this._size.width / this._size.cols - this._styles.border.width)+'px;');
    /**/div.push('height: '+Math.floor(this._size.height / this._size.rows - this._styles.border.width)+'px;');
    /**/div.push('transition: top ' + this._styles.animation.duration+'ms ' + this._styles.animation.function+', left ' + this._styles.animation.duration+'ms ' + this._styles.animation.function + ';');
    /**/div.push('border: ' + this._styles.border.width+'px ' + this._styles.border.style + ' ' + this._styles.border.color + ';');
    let img  = [];
    /**/img.push('position: absolute;');
    /**/img.push('top: 0px;');
    /**/img.push('left: 0px;');
    /**/img.push('width: '+this._size.width+'px;');
    /**/img.push('height: '+this._size.height+'px;');

    styles += (this._container+' { '+container.join(' ')+' }\n');
    styles += (this._container+' > div { '+div.join(' ')+' }\n');
    styles += (this._container+' > div > img { '+img.join(' ')+' }\n');

    let stl = document.createElement('style');
    stl.innerHTML = styles;
    document.head.appendChild(stl);

    // ===== Draw puzzle
    document.querySelector(this._container).innerHTML = '';
    for (let i = 0; i < this._size.cols; i++) { // cols
        for (let j = 0; j < this._size.rows; j++) { // rows
            let div = document.createElement('div');
            div.style.left = (this._Puzzle[i][j].x) * Math.floor(this._size.width/this._size.cols) + 'px';
            div.style.top = (this._Puzzle[i][j].y) * Math.floor(this._size.height/this._size.rows) + 'px';
            //div.setAttribute('data-ij', (i+''+j));
            //div.setAttribute('data-xy', (this._Puzzle[i][j].x+''+Puzzle[i][j].y));

            let img = document.createElement('img');

            if (this._emtry.x == i && this._emtry.y == j) {
                if (this._styles.emtry.image !== undefined && this._styles.emtry.image !== null && this._styles.emtry.image !== 0 && this._styles.emtry.image !== '') {
                    img.src = this._styles.emtry.image;
                    img.style.width = '100%';
                    img.style.height = '100%';
                } else {
                    img.style.display = 'none';
                }
                
                div.style.backgroundColor = this._styles.emtry.color;
                div.style.zIndex = '2';
                this._emtry.element = img;
            } else {
                img.src = this._image;
                img.style.left = (i) * -1 * Math.floor(this._size.width/this._size.cols) + 'px';
                img.style.top = (j) * -1 * Math.floor(this._size.height/this._size.rows) + 'px';
                div.style.zIndex = '1';

                let P = this;
                // == On click
                img.onclick = function (e) {
                    let ci = i, cj = j;
                    
                    let cx = P._Puzzle[ci][cj].x; // current x
                    let cy = P._Puzzle[ci][cj].y;
                    let ex = P._Puzzle[P._emtry.x][P._emtry.y].x; // emtry x
                    let ey = P._Puzzle[P._emtry.x][P._emtry.y].y;

                    if ((Math.abs(cx-ex) == 1 && (cy == ey)) || (Math.abs(cy-ey) == 1 && (cx == ex))) {
                        P._Puzzle[ci][cj].x = ex;
                        P._Puzzle[ci][cj].y = ey;
                        P._Puzzle[P._emtry.x][P._emtry.y].x = cx;
                        P._Puzzle[P._emtry.x][P._emtry.y].y = cy;

                        // = Redraw new values
                        e.target.parentElement.style.left = 
                        /**/(P._Puzzle[ci][cj].x) * Math.floor(P._size.width/P._size.cols) + 'px';
                        e.target.parentElement.style.top = 
                        /**/(P._Puzzle[ci][cj].y) * Math.floor(P._size.height/P._size.rows) + 'px';
                        P._emtry.element.parentElement.style.left = 
                        /**/(P._Puzzle[P._emtry.x][P._emtry.y].x) * Math.floor(P._size.width/P._size.cols) + 'px';
                        P._emtry.element.parentElement.style.top = 
                        /**/(P._Puzzle[P._emtry.x][P._emtry.y].y) * Math.floor(P._size.height/P._size.rows) + 'px';
                    };
                }
            }

            div.appendChild(img);

            document.querySelector(this._container).appendChild(div);
        }
    }
}
Puzzle15.prototype.Shuffle = function () { // Shuffle puzzle
    //
}
Puzzle15.prototype.IsSolved = function () { // Is puzzle solved
    //
}

/*
let options = {
    size: {
        rows: 4,             // строки
        cols: 4,             // столбцы
        width: 512,          // ширина
        height: 512          // высота
    },
    image: '',               // картинка
    container: '',           // контейнер (родитель)
    emtry: {
        x: 0,                // x пустой ячейки
        y: 0                 // y пустой ячейки
    }         
}
let styles = {
    animation: {
        duration: 0, //ms
        function: '' //linear
    },
    emtry: {
        color: '',
        image: ''
    },
    border: {
        width: 2,
        style: '',
        color: ''
    }
}
*/

