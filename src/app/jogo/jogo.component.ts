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
  portaSelecionada = 0;

  portas = [];
  portasDescartadas = [];
  vitorias = 0;
  derrotas = 0;

  constructor() { }

  ngOnInit() {
    this.iniciaJogo();
  }

  iniciaJogo() {
    this.portas.length = 0;
    this.portaSelecionada = 0;
    this.definePortaPremiada();
    for (let i = 1; i <= this.numeroPortas; i++) {
      const porta = new Porta();
      if (this.portaPremiada == i) {
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

  definePortaSelecionada(evento: any) {
    this.portaSelecionada = evento;
  }

  voltaParaMenu() {
    this.iniciado = false;
    this.evento.emit(this.iniciado);
  }

  preenchePlacar(evento: any) {
    if (evento == true) {
      this.vitorias++;
    } else if (evento == false) {
      this.derrotas++;
    }
  }

  eliminarErradas() {
    if (this.portaSelecionada < 1) {
      this.exibeInstrucoes();
    } else {
      const opcaoTroca = this.defineOpcaoTroca();
      var portas2 = [];

      for (var porta of this.portas) {
        const condicao1 = porta.selecionada == true;
        const condicao2 = porta.numero == opcaoTroca;

        if (!condicao1 && !condicao2) {
          porta.descartavel = true;
        }

        portas2.push(porta);
      }
      this.portas.length = 0;
      this.portas = portas2;
    }
  }

  exibeInstrucoes(){
    const mensagem = '1 - Selecione a porta clicando no número dela\n2 - Clique no botão Eliminar erradas\n3 - Clique na porta para abrir ou se quiser trocar pela que sobrou, \nclique no númro da porta que sobrou e depois na porta para abri-la'
    alert(mensagem);
  }

  defineOpcaoTroca() {
    let opcaoTroca = Math.floor(Math.random() * this.numeroPortas + 1);
    console.log('premiada: ' + this.portaPremiada);

    if (this.portaPremiada == this.portaSelecionada) {
      while (opcaoTroca == this.portaSelecionada) {
        opcaoTroca = Math.floor(Math.random() * this.numeroPortas + 1);
      }
    } else {
      opcaoTroca = this.portaPremiada;
    }
    return opcaoTroca;
  }

}

export class Porta {
  premiada = false;
  numero: number;
  descartavel = false;
  selecionada = false;
}
