import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monty Hall Game';
  jogoIniciado: boolean;
  numeroPortas: number;

  alternaTela(evento: any) {
    this.jogoIniciado = evento[0];
    this.numeroPortas = evento[1];
  }

}
