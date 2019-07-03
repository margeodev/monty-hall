import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  @Output() evento = new EventEmitter();
  iniciado: boolean;
  @Input() numeroPortas: number;
  portaPremiada: number;
  portas = []
  vitorias = 0;
  derrotas = 0;

  constructor() { }

  ngOnInit() {
    this.iniciaJogo();
  }

  iniciaJogo() {
    this.portas.length = 0;
    this.definePortaPremiada();
      for(let i = 1; i <= this.numeroPortas; i++) {
        const porta = new Porta();
        if (this.portaPremiada == i){
          porta.numero = i;
          porta.premiada = true;
        } else {
          porta.numero = i;
        }
        this.portas.push(porta);
      }
  }

  definePortaPremiada() {
    this.portaPremiada = Math.floor(Math.random() * this.numeroPortas + 1);
  }

  voltaParaMenu() {
    this.iniciado = false;
    this.evento.emit(this.iniciado);
  }

  preenchePlacar(evento: any){
    if(evento == true) {
      this.vitorias++;
    } else if(evento == false) {
      this.derrotas++;
    }
  }

}

export class Porta {
  premiada: boolean;
  numero: number;
}
