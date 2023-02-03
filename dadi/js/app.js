//GIOCO DEI DADI

// 1.Chiedi all'utente di inserire il suo numero
const numeroGiocatore = parseInt(prompt("Inserisci il tuo numero (1-6)"));

// 2.Genera il numero casuale per il computer (math.floor+math.random ossia da numeri che decrescono a numeri casuali )
const numeroComputer = Math.floor(Math.random() * 6) + 1;

//3.Confronta i due numeri 
    //SE numgiocatore>numComputer 
       //ALLORA giocatore ha vinto
    //ALTRIMENTI SE numcomputer>numgiocatore
       //ALLORA computer ha vinto
let risultato;


if (numeroGiocatore > numeroComputer) {
  risultato = "Il giocatore ha vinto con il punteggio di " + numeroGiocatore;
  console.log("Il giocatore ha vinto con il punteggio di " + numeroGiocatore);
} else if (numeroComputer > numeroGiocatore) {
  risultato = "Il computer ha vinto con il punteggio di " + numeroComputer;
  console.log("Il computer ha vinto con il punteggio di " + numeroComputer);
} else {
  risultato = "Pareggio tra giocatore e computer con il punteggio di " + numeroGiocatore;
  console.log("Pareggio tra giocatore e computer con il punteggio di " + numeroGiocatore);
}







