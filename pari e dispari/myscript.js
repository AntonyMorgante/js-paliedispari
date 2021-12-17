/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

function fetchDataNumber(){ /* prendiamo il numero selezionato dall'utente */
    const n1 = parseInt(document.getElementById("n1").value); /* numero scelto dall'utente */
    return n1;
}

function fetchDataChoice(){ /* prendiamo i valori di pari o dispari selezionati dall'utente */
    const pari = parseInt(document.getElementById("even-odd").value); /* scelta di pari o dispari */
    return pari;
}

function evenCheck (number){ /* controlla se un numero è pari */
    if (number % 2 == 0) {
        return true;
    }
    return false;
};

function integerGenerator (inf,sup){ /* generatore casuale di numeri */
    return Math.floor(Math.random()*(sup-inf+1)+inf);
};

function evenAndOdd (n1,pari){ /* giocata completa partendo da numero e scelta del giocatore */
    let n2 = integerGenerator(1,5); /* genera un numero da 1 a 5 */
    let result = evenCheck(n1 + n2); /* controlla se la somma tra numero dell'utente e numero generato è pari */
    if (result){ /* caso con somma pari */
        if(pari){ /* caso con scelta pari dell'utente */
            console.log(n1+" + "+n2+" è Pari! Hai vinto!");
        }
        else{ /* caso scelta dispari */
            console.log(n1+" + "+n2+" è Pari! Hai perso!")
        }
    }
    else{ /* caso a somma dispari */
        if(pari){ /* caso scelta pari */
            console.log(n1+" + "+n2+" è Dispari! Hai perso!");
        }
        else{ /* caso scelta dispari */
            console.log(n1+" + "+n2+" è Dispari! Hai vinto!");
        }
    }
};

function playGame(){ /* funzione che parte quando viene premuto il bottone Gioca */
    evenAndOdd(fetchDataNumber(),fetchDataChoice()); /* pari o dispari prendendo i dati selezionati dall'utente */
};
