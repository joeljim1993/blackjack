import { LitElement, html, css } from 'lit';

export class AppBlackjack extends LitElement {


    

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
    }

    pedirCarta(){
        console.log("se esta pidiendo una nueva carta ");

    }

    detenerTurno(){
        console.log("se detuvo el turno  ");

    }




}
customElements.define('my-app', AppBlackjack);
