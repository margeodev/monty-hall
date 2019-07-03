import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.component.html',
  styleUrls: ['./form-inicial.component.css']
})
export class FormInicialComponent implements OnInit {

  @Output() evento = new EventEmitter();
  iniciado: boolean;
  numeroPortas = 3;


  constructor() { }

  ngOnInit() {
  }

  jogar() {
    this.iniciado = true;
    const jogo = [];
    jogo[0] = this.iniciado;
    jogo[1] = this.numeroPortas;
    this.evento.emit(jogo);
  }

  incrementa() {
    if (this.numeroPortas < 100) {
      this.numeroPortas++;
    }
  }

  decrementa() {
    if (this.numeroPortas > 3) {
      this.numeroPortas--;
    }
  }

}
