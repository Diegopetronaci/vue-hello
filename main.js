
//Istruzioni:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere un’immagine presa anch’essa da un data
const name = prompt("inserisci un nome");

let titolo = new Vue ({
    el: "#titolo",
    data: {
        messaggio: "Hey " + name + " piacere di conoscerti",
    },
});

/* const bottone = new Vue({
    el: "#bottone",
    data: {
        messaggio: "click Me",
    }
}), */