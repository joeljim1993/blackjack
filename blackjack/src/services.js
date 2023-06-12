


export class Service {

    
     deck         = [];
     tipos      = ['C','D','H','S']
     especiales = ['A','J','Q','K']

     puntosJugadores = [];

    //  TODO: funcion para inicializar 

    inicializarJuego(numjugadores = 2){

        let deck = this.crearDeck();
        console.log("deck creado ", deck);
        for( let i =0 ;i< numjugadores;i++){
            this.puntosJugadores.push(0);
        }

        this.deck = deck;
        // TODO: debera la funcion disabled btn: pedir y detener


    }

    crearDeck(){
        
        let deck=[];

        for( let i =2; i<=10;i++){
            for(let tipo of this.tipos){
                deck.push(i + tipo);
                console.log("deck",deck);
            }
        }

        for ( let tipo of this.tipos){
            for(let esp of this.especiales){
                deck.push(esp + tipo );
                console.log("deck-especial",deck);
            }
        }

        return deck;

    }

    pedirCarta(){
        if(this.deck.length === 0){
            throw " no hay cartas en el deck";
        }
        return this.deck.pop();
    }

    valorCarta(carta){
        const valor = carta.substring(0,carta.length -1);
        console.log("valor",valor);
        return (isNaN(valor)) ?
        (valor === "A") ? 11:10
        :valor*1;
    }

   acumularPuntos(carta,turno){
    
   }




}
 export let servicio = new Service();