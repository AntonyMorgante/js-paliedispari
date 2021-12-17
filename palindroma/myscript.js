/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

function fetchWord(){ /* funzione di recupero della parola inserita dall'utente */
    const word = (document.getElementById("word").value).toLowerCase(); /* trasformiamo tutta la stringa in minuscolo */
    return word;
};

function checkPali(word){ /* funzione di controllo palindromia */
    for (let i=0; i<(word.length / 2);i++){ 
        if (word[i]!=word[word.length-i -1]){ /* arresta il ciclo appena si sa che la parola non è palindroma */
            return false;
        }
    };
    return true;
}

function controlPali(){
    if(checkPali(fetchWord())){
        console.log("La parola da te inserita è palindroma!")
    }
    else{
        console.log("La parola da te inserita non è palindroma!");
    }
};