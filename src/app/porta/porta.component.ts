import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-porta',
  templateUrl: './porta.component.html',
  styleUrls: ['./porta.component.css']
})
export class PortaComponent implements OnInit {

  path = '../../assets/images/';
  @Output() eventoPorta = new EventEmitter();
  @Output() eventoSelecionaPorta = new EventEmitter();
  @Input() porta: any;
  venceu: boolean;
  aberta = false;
  imgPorta = "../../assets/images/pfn.png";
  imgPortaDescartavel = "../../assets/images/pd.png";
  imgGift = "../../assets/images/bode.png";
  numeroPorta: number;
  premiada: boolean;

  constructor() { }

  ngOnInit() {
    this.montaPorta();
  }

  escolhePorta() {
    if(!this.aberta) {
      this.porta.selecionada = !this.porta.selecionada;
      if (this.porta.selecionada) {
        this.eventoSelecionaPorta.emit(this.numeroPorta);
        this.imgPorta = this.path + 'pfs.png';
      } else {
        this.imgPorta = this.path + 'pfn.png';
      }
    }
  }

  clicada() {
    if (this.porta.selecionada) {
      if (this.porta.premiada) {
        this.imgPorta = "../../assets/images/premioTesouro.png";
        this.venceu = true;
      } else {
        this.imgPorta = "../../assets/images/premioBode.png";
        this.venceu = false;
      }
      this.eventoPorta.emit(this.venceu);
      this.aberta = true;
    } else {
      this.exibeInstrucaoPorta();
    }
  }

  montaPorta() {
    this.numeroPorta = this.porta.numero;
    this.premiada = this.porta.premiada;
  }

  reiniciaJogo() {
    this.porta.selecionada = false;
    this.aberta = false;
  }

  exibeInstrucaoPorta() {
    const mensagem = 'Para abrir a porte é preciso selecioná-la antes clicando no número acima dela, \ndepois disso ela poderá ser aberta com um clique.'
    alert(mensagem);
  }
}
