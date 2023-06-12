import { LitElement, html, css } from 'lit';
import { Service} from './services';
import { servicio } from './services';


export class AppBlackjack extends LitElement {

   constructor(){
    super();

    this.servicio = servicio;

   }
    

    render() {
        return html`
        <h1>jack-black</h1>
        <button  @click=${this.nuevoJuego}  >Nuevo juego</button>
        <button @click=${this.pedirCarta}>Pedir Carta</button>
        <button @click=${this.detenerTurno}> Detener</button>

        <h1> jugador 1-0</h1>

        <h1> Computador - 0</h1>
        
        `;
    }



    nuevoJuego(){
        console.log("se esta ejecutando un nuevio juego ");
        this.servicio.inicializarJuego();
        
    }

    pedirCarta(){
        console.log("se esta pidiendo una nueva carta ");
        let cartaPedida = this.servicio.pedirCarta();
        console.log("carta extraida",cartaPedida);
        let valorCarta = this.servicio.valorCarta(cartaPedida);
        console.log("valorCarta",valorCarta);
    }

    detenerTurno(){
        console.log("se detuvo el turno  ");

    }




}
customElements.define('my-app', AppBlackjack);
