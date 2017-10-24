'use strict';

let Puzzle14 = {
    Puzzle: [],
    emtrycell: {
        x: 0,
        y: 0
    },
    size: {
        rows: 0,
        cols: 0
    },
    Draw: function (options, styles) {
        this.emtrycell.x = options.emtryx;
        this.emtrycell.y = options.emtryy;

        this.size.cols = options.cols;
        this.size.rows = options.rows;

        for (let i = 0; i < this.size.cols; i++) { // cols
            let col = [];
            for (let j = 0; j < this.size.rows; j++) { // rows
                col.push({x: i, y: j});
            }
            this.Puzzle.push(col);
        }

        // for (let i = 0; i < this.size.cols; i++) { // cols
        //     for (let j = 0; j < this.size.rows; j++) { // rows
        //         console.log(i+''+j+'  '+this.Puzzle[i][j].x+''+this.Puzzle[i][j].y);
        //     }
        // }

        SetStyles(options, styles);

    },
    SetStyles (options, styles) {
        var styles = '';
        var container = [];
            container.push('position: relative;');
            container.push('width: ' + options.width + 'px;');
            container.push('height: ' + options.height + 'px;');
        var div = [];
            div.push('position: absolute;');
            div.push('top: 0px;');
            div.push('left: 0px;');
            div.push('overflow: hidden;');
            div.push('width: '+Math.floor(options.width / options.cols)+'px;');
            div.push('height: '+Math.floor(options.height / options.rows)+'px;');
            div.push('transition: top '+styles.animation.duration+'ms '+styles.animation.function+', left '+styles.animation.duration+'ms '+styles.animation.function+';');
            //div.push('');
        var img  = [];
            img.push('position: absolute;');
            img.push('top: 0px;');
            img.push('left: 0px;');
            img.push('width: '+options.width+'px;');
            img.push('height: '+options.height+'px;');
        
        styles += ('#'+options.container+' { '+container.join(' ')+' }\n');
        styles += ('#'+options.container+' > div { '+div.join(' ')+' }\n');
        styles += ('#'+options.container+' > div > img { '+img.join(' ')+' }\n');

        let stl = document.createElement('style');
        stl.innerHTML = styles;
        document.head.appendChild(stl);
    }
}

// class
function Puzzle15 (options, styles) {
    // fields
    this._size = {
        rows: 0,
        cols: 0,
        width: 0,
        height: 0
    };
    this._image = '';
    this._container = '';
    this._emtry = {
        x: 0,
        y: 0
    };
    this.styles = {
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
    };

    // constructor
    
}

/*
let options = {
    rows: 4,             // строки
    cols: 4,             // столбцы
    width: 512,          // ширина
    height: 512          // высота
    image: '',           // картинка
    container: '',       // id контейнер (родитель)
    emtryx: 0,           // x пустой ячейки
    emtryy: 0            // y пустой ячейки
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

