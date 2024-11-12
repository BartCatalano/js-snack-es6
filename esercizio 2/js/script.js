// Creo array di team con solo il nome inserito

const Squadre = [
    { nome: `CeltaVino`, punti: 0, fallisubiti: 0},
    { nome: `RealMadrink`, punti: 0, fallisubiti: 0},
    { nome: `Spiacenza`, punti: 0, fallisubiti: 0}, 
];

// CREO due NUMERI RANDOM nelle var per punti e falli
//li inserisco  nelle rispettive chiavi dell'oggetto 


    for (let i = 0; i < Squadre.length; i++) {
        const curTeam = Squadre[i];
        const numeroPunti = Math.floor(Math.random() * 100); // Numeri casuali tra 1 e 100
        const numeroFalli = Math.floor(Math.random() * 100); // Numeri casuali tra 1 e 100
       curTeam.punti = numeroPunti;
       curTeam.fallisubiti = numeroFalli;
    }
    console.log(Squadre);
// creo nuovo array e divido i dati
    const arrayNomiFalli= [];
    const arrayPunti = [];

    for(let i = 0; i < Squadre.length; i++){
        const curSquadra = Squadre[i];
            arrayNomiFalli.push(curSquadra.nome);
            arrayNomiFalli.push(curSquadra.fallisubiti);
            arrayPunti.push(curSquadra.punti);
    }
    
console.log(arrayNomiFalli,arrayPunti);


