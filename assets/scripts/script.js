const smileyBtn = document.getElementById(`smileyBtn`);

let difficulty = 10 /*dopo imposteremo 3 difficoltà tramite btn*/

smileyBtn.addEventListener(`click`, function() /*creiamo una griglia con una semplice matrice di div*/
{
    let tileNumber = 1;
    for (i = 1; i <= difficulty; i++) 
    {
        for (y = 1; y <= difficulty; y++ ) 
        {
            document.getElementById(`minesweeper`).append('<div id = "tile">'
                + `${tileNumber}</div>`); 
                console.log(`Il numero di casella è ${tileNumber}`);
                tileNumber++;
        }
        document.getElementById(`minesweeper`).append(`<br>`); 
    }
})
