const startButton = document.querySelector('#startButton');
const submitButton = document.querySelector('#submitButton');
// const inputBox = document.querySelector('#inputBox');

const body = document.querySelector('body');

const word1 = document.querySelector('#word1');
const word2 = document.querySelector('#word2');
const word3 = document.querySelector('#word3');
const word4 = document.querySelector('#word4');
const word5 = document.querySelector('#word5');
word1.disabled = true;
word2.disabled = true;
word3.disabled = true;
word4.disabled = true;
word5.disabled = true;

// Start Game
startButton.addEventListener('click', (e) => {
    levelOne();
    startButton.innerHTML = 'PLAY AGAIN';
    startButton.classList.add('reload');
    inputBox.placeholder = '';
    reload();
});

//Restart game
const reload = () => {
    let reloadButton = document.querySelector('.reload');

    reloadButton.addEventListener('click', (e) => {
        confirm('Do you want to restart the game?');
        location.reload();
    });

}


//Words
const wordsLevelOne = ['abandon', 'abandoned', 'ability', 'able', 'about', 'above', 'abroad', 'absence', 'absent', 'absolute','absolutely', 'absorb', 'abuse', 'acadmeic', 'accent'];
const wordsLevelTwo = ['accept', 'acceptable', 'access', 'accident', 'accidental','accompany', 'according to', 'account', 'accurate', 'accuse', 'achieve', 'achievement', 'acid', 'acknowledge', 'acquire'];


const print = document.querySelector('#results');
const level = document.querySelector('#level');
let sumPoints = 0;
let noPoints = 0;
let levels = 1;

// Level-1
const levelOne = () => {
    word1.disabled = true;
    word2.disabled = true;
    word3.disabled = true;
    word4.disabled = true;
    word5.disabled = true;
    const random1 = Math.floor(Math.random() * wordsLevelOne.length);
    displayWord1 = wordsLevelOne[random1];
    const wordBox1 = document.querySelector('#wordBox');
    wordBox1.innerHTML = displayWord1;



    setTimeout(() => {
        wordBox1.innerHTML = '';
        const random2 = Math.floor(Math.random() * wordsLevelOne.length);
        displayWord2 = wordsLevelOne[random2];
        const wordBox2 = document.querySelector('#wordBox');
        wordBox2.innerHTML = displayWord2;
        setTimeout(() => {
            wordBox2.innerHTML = '';
            const random3 = Math.floor(Math.random() * wordsLevelOne.length);
            displayWord3 = wordsLevelOne[random3];
            const wordBox3 = document.querySelector('#wordBox');
            wordBox3.innerHTML = displayWord3;
            setTimeout(() => {
                wordBox3.innerHTML = '';
                const random4 = Math.floor(Math.random() * wordsLevelOne.length);
                displayWord4 = wordsLevelOne[random4];
                const wordBox4 = document.querySelector('#wordBox');
                wordBox4.innerHTML = displayWord4;
                setTimeout(() => {
                    wordBox4.innerHTML = '';
                    const random5 = Math.floor(Math.random() * wordsLevelOne.length);
                    displayWord5 = wordsLevelOne[random5];
                    const wordBox5 = document.querySelector('#wordBox');
                    wordBox5.innerHTML = displayWord5;
                    setTimeout(() => {
                        wordBox5.innerHTML = '';
                        enableInput();
                    }, 1500);
                }, 1500);

            }, 1500);
        }, 1500);

    }, 1500);

}
// Level-2
const levelTwo = () => {
    word1.disabled = true;
    word2.disabled = true;
    word3.disabled = true;
    word4.disabled = true;
    word5.disabled = true;
    const random1 = Math.floor(Math.random() * wordsLevelTwo.length);
    displayWord1 = wordsLevelTwo[random1];
    const wordBox1 = document.querySelector('#wordBox');
    wordBox1.innerHTML = displayWord1;

    body.classList.add('levelTwo');

    setTimeout(() => {
        wordBox1.innerHTML = '';
        const random2 = Math.floor(Math.random() * wordsLevelTwo.length);
        displayWord2 = wordsLevelTwo[random2];
        const wordBox2 = document.querySelector('#wordBox');
        wordBox1.innerHTML = displayWord2;
        setTimeout(() => {
            wordBox2.innerHTML = '';
            const random3 = Math.floor(Math.random() * wordsLevelTwo.length);
            displayWord3 = wordsLevelTwo[random3];
            const wordBox3 = document.querySelector('#wordBox');
            wordBox3.innerHTML = displayWord3;
            setTimeout(() => {
                wordBox3.innerHTML = '';
                const random4 = Math.floor(Math.random() * wordsLevelTwo.length);
                displayWord4 = wordsLevelTwo[random4];
                const wordBox4 = document.querySelector('#wordBox');
                wordBox4.innerHTML = displayWord4;
                setTimeout(() => {
                    wordBox4.innerHTML = '';
                    const random5 = Math.floor(Math.random() * wordsLevelTwo.length);
                    displayWord5 = wordsLevelTwo[random5];
                    const wordBox5 = document.querySelector('#wordBox');
                    wordBox5.innerHTML = displayWord5;
                    setTimeout(() => {
                        wordBox5.innerHTML = '';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
        enableInput();
    }, 1000);


}



const enableInput = () => {
    word1.disabled = false;
    word1.focus();
    word2.disabled = false;
    word2.focus();
    word3.disabled = false;
    word3.focus();
    word4.disabled = false;
    word4.focus();
    word5.disabled = false;
    word5.focus();

}

submitButton.addEventListener('click', (e) => {
    const inputValue1 = document.getElementById('word1').value;
    const inputValue2 = document.getElementById('word2').value;
    const inputValue3 = document.getElementById('word3').value;
    const inputValue4 = document.getElementById('word4').value;
    const inputValue5 = document.getElementById('word5').value;

    if (inputValue1 != '' && inputValue2 != '' && inputValue3 != '' && inputValue4 != '' && inputValue5 != '') {

        if (inputValue1 === displayWord1) {
            sumPoints += 1;
        }
        if (inputValue2 == displayWord2) {
            sumPoints += 1;
        }
        else {
            sumPoints -= 1;
            noPoints += 1;
        }
        if (inputValue3 == displayWord3) {
            sumPoints += 1;
        }
        else {
            sumPoints -= 1;
            noPoints += 1;
        }
        if (inputValue4 == displayWord4) {
            sumPoints += 1;
        }
        else {
            sumPoints -= 1;
            noPoints += 1;
        }
        if (inputValue5 == displayWord5) {
            sumPoints += 1;
        }
        else {
            sumPoints -= 1;
            noPoints += 1;
        }
        levels+=1;
        print.innerHTML = `<span class="correct">Score!! (${sumPoints})</span><br>`;
        level.innerHTML=`<h2>Level : ${levels} </h2>`
        document.getElementById("word1").value = "";
        document.getElementById("word2").value = "";
        document.getElementById("word3").value = "";
        document.getElementById("word4").value = "";
        document.getElementById("word5").value = "";

        if (noPoints >= 5) {
            alert('Wrong Word!! Game Over!! Try Again!!');
            location.reload();
        }
        else{
            levelOne();
        }
        
    }
});