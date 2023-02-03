console.log('Array')

//1.Creiamo un arrey con una lista di email stringe al suo interno, in qaunto dato di archivazione di più valori al suo interno

const arrayEmail = ["jonsnow@gmail.com", "cesira@gmail.com", "sansa@gmail.com", "arya@gmail.com"];
console.log(arrayEmail);


//2.Usiamo prompt, chiediamo all'utente la sua email

const emailUtente = prompt("Inserisci la tua email");

//3. Controlla che la email inserita sia nella lista email (utilizza ciclo FOR+IF

//emailTrovata = false;

//Includi ciclo for
   //SE l'email viene trovata emailtrovata=true e il ciclo si interrompe
      //ALTRIMENTI il ciclo continua perchè emailTrovata = false;

      let emailTrovata = false;
        
      for (var i = 0; i < arrayEmail.length; i++) {
        if (arrayEmail[i] === emailUtente) {
          emailTrovata = true;
          break;
        }
      }

//Indica in colsole se l'email è, o meno, presente nella lista

         
    if (emailTrovata) {
       console.log("L'indirizzo email è presente nella lista.");
  }   else {
        console.log("L'indirizzo email non è presente nella lista.");
      }        
      






       
        
        
        
        
      