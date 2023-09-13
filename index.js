const input = document.querySelector(".input");
const character = document.querySelector(".character");
const word = document.querySelector(".word");
const wordsLeft = document.querySelector(".words-limit");
const readingTime = document.querySelector(".reading-time");

const wordLimit2 = 50;

input.addEventListener("keyup", countCharacters)
input.addEventListener("keyup", countWords)

// count character
function countCharacters(){
    character.innerHTML = input.value.length;
}

// count word and left word
function countWords(){
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi)

    if (words){
        word.innerHTML = words.length;
        wordsLeft.innerHTML = wordLimit2 - words.length;
    }else{
        word.innerHTML = 0;
    }

//     Reading time based on 225 word/minutes
    if (words){
        let secs = Math.floor((words.length * 60)/225)
        if (secs > 59){
            let min = Math.floor(secs / 60)
            secs = secs - min *60;
            readingTime.innerHTML = min + "Min" + secs + "Secs"
        }else{
            readingTime.innerHTML = secs + "Secs"
        }
    }else{
        readingTime.innerHTML = "0 Secs"
    }

}

