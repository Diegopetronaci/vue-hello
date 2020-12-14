
//Istruzioni:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere un’immagine presa anch’essa da un data

const name = prompt("inserisci un nome");


let container = new Vue ({
    el: "#container",
    data: {
        messaggio: "Hey piacere " + name + " di conoscerti!",
        immagine: "PubG.jpg"
    },
});



