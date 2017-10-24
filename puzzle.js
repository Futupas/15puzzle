'use strict';

// class
function Puzzle15 (options, styles) {
    // fields
    this._Puzzle = [];
    // this._size = {
    //     rows: 0,
    //     cols: 0,
    //     width: 0,
    //     height: 0
    // };
    // this._image = '';
    // this._container = '';
    // this._emtry = {
    //     x: 0,
    //     y: 0
    // };
    // this._styles = {
    //     animation: {
    //         duration: 0, //ms
    //         function: '' //linear
    //     },
    //     emtry: {
    //         color: '',
    //         image: ''
    //     },
    //     border: {
    //         width: 2,
    //         style: '',
    //         color: ''
    //     }
    // };

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
        y: options.emtry.y || 0
    };
    this._styles = {
        animation: {
            duration: styles.animation.duration || 0.3,
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

Puzzle15.prototype.Draw = function () {

}
Puzzle15.prototype.Move = function () {

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
    container: '',           // id контейнер (родитель)
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

