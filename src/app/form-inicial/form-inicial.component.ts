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

  iniciaJogo() {
    this.iniciado = true;
    this.evento.emit(this.iniciado);
  }

  incrementa() {
    if(this.numeroPortas < 100) {
      this.numeroPortas++;
    }
  }

  decrementa() {
    if(this.numeroPortas > 3) {
      this.numeroPortas--;
    }
  }
}
