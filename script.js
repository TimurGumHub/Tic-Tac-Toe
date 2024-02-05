for (let index = 0; index < 9; index++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
    
};

let hod = 0;
let moves = 0;
document.getElementById('game').addEventListener('click', (event) => {
    console.log(event);
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = 'O';

        }
        hod += 1;
        moves += 1;
        checkWinner();
    }
})


function checkWinner () {
    let allblock = document.getElementsByClassName('block');
    isDraw = true;
    // console.log(allblock);
    if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X') {
        alert('Победили крестики');
        resetGame();
        isDraw = false;}
    if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X') {
            alert('Победили крестики');
            resetGame();
            isDraw = false;}
    if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
                alert('Победили крестики');
                resetGame();
                isDraw = false;}
    if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X') {
                    alert('Победили крестики');
                    resetGame();
                    isDraw = false;}
    if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X') {
            alert('Победили крестики');
            resetGame();
            isDraw = false;}
    if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
                alert('Победили крестики');
                resetGame();
                isDraw = false;}
    if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
                    alert('Победили крестики');
                    resetGame();
                    isDraw = false;}
    if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X') {
                        alert('Победили крестики');
                        resetGame();
                        isDraw = false;}
    //нолики
    if (allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O' && allblock[2].innerHTML == 'O') {
        alert('Победили нолики');
 
 resetGame();       isDraw = false;}
    if (allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML == 'O') {
            alert('Победили нолики');
 
 resetGame();           isDraw = false;}
    if (allblock[6].innerHTML == 'O' && allblock[7].innerHTML == 'O' && allblock[8].innerHTML == 'O') {
                alert('Победили нолики');
 
 resetGame();               isDraw = false;}
    if (allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O' && allblock[6].innerHTML == 'O') {
                    alert('Победили нолики');
 
 resetGame();                   isDraw = false;}
    if (allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[7].innerHTML == 'O') {
            alert('Победили нолики');
 
 resetGame();           isDraw = false;}
    if (allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O' && allblock[8].innerHTML == 'O') {
                alert('Победили нолики');
 
 resetGame();               isDraw = false;}
    if (allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[8].innerHTML == 'O') {
                    alert('Победили нолики');
 
 resetGame();                   isDraw = false;}
    if (allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[6].innerHTML == 'O') {
                        alert('Победили нолики');
 
 resetGame();                       isDraw = false;}
    if (isDraw && moves === 9) {
        alert('Ничья. Игра окончена');
        resetGame();
    }

    }
    function resetGame() {
        let allblock = document.getElementsByClassName('block');
        
        // Очищаем содержимое блоков
        for (let i = 0; i < allblock.length; i++) {
            allblock[i].innerHTML = '';
        }
    
        // Сбрасываем счетчики
        hod = 0;
        moves = 0;
    }
