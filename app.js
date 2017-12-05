'use strict';
function naToArray(nodearray) {
    let usualarray = [];
    for (let i = 0; i < nodearray.length; i++) {
        usualarray.push(nodearray[i]);
    }
    return usualarray;
}

function MakePuzzle() {
    let options = {
        size: {
            rows: 4,             // строки
            cols: 4,             // столбцы
            width: 512,          // ширина
            height: 512          // высота
        },
        image: 'puzzleimage.png',               // картинка
        container: '#puzzlediv',           // id контейнер (родитель)
        emtry: {
            x: 3,                // x пустой ячейки
            y: 3                 // y пустой ячейки
        }         
    };
    let styles = {
        animation: {
            duration: 300, //ms
            function: 'linear' //linear
        },
        emtry: {
            color: '#999999',
            image: 'emtryimage.png'
        },
        border: {
            width: 2,
            style: 'solid',
            color: '#999999'
        }
    };
    let a = new Puzzle15(options, styles);
    a.Draw();
};
MakePuzzle();




function OnImageChange () {
    let options = naToArray(document.querySelectorAll('select[name="image"] > option'));
    console.log(options);
    let shw = false;
    if (options.filter(function(e) { return e.selected == true; })[0].value == 'custom') shw = true;
    //options.forEach(function(element) {
    //    if (element.hasAttribute('selected') && element.getAttribute('value') == 'custom') {
    //        shw = true;
    //    }
    //}, this);
    console.log (shw);
    if (shw) {
        document.querySelector('select[name="image"] + label').style.display = 'auto';
        console.log('auto');
    } else {
        document.querySelector('select[name="image"] + label').style.display = 'none';
        console.log('none');
    }
}
function OnEmtryImageChange () {
    
}

