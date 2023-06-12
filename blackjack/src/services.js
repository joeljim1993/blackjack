


class Service {

    
     deck         = [];
     tipos      = ['C','D','H','S']
     especiales = ['A','J','Q','K']

     puntosJugadores = [];

    //  TODO: funcion para inicializar 

    crearDeck(){
        
        let deck=[];

        for( let i =2; i<=10;i++){
            for(let tipo of this.tipos){
                deck.push(i + tipo);
            }
        }

        for ( let tipo of this.tipos){
            for(let esp of this.especiales){
                deck.push(esp + tipo )
            }
        }

        return deck;

    }






}