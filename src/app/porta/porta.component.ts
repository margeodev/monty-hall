import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-porta',
  templateUrl: './porta.component.html',
  styleUrls: ['./porta.component.css']
})
export class PortaComponent implements OnInit {

  @Output() eventoPorta = new EventEmitter();
  @Input() porta: any;
  venceu: boolean;
  selecionada: boolean;
  aberta = false;
  imgPorta = "../../assets/images/pfn.png";
  imgGift = "../../assets/images/bode.png";
  numeroPorta: number;
  premiada: boolean;

  constructor() { }

  ngOnInit() {
    this.montaPorta();
  }

  escolhePorta() {
    if(!this.aberta) {
      this.selecionada = !this.selecionada;
      if (this.selecionada) {
        this.imgPorta = "../../assets/images/pfs.png";
      } else {
        this.imgPorta = "../../assets/images/pfn.png";
      }
    }
  }

  clicada() {
    if (this.selecionada) {
      if (this.porta.premiada) {
        this.imgPorta = "../../assets/images/premioTesouro.png";
        this.venceu = true;
      } else {
        this.imgPorta = "../../assets/images/premioBode.png";
        this.venceu = false;
      }
      this.eventoPorta.emit(this.venceu);
      this.aberta = true;
    }
  }

  montaPorta() {
    this.numeroPorta = this.porta.numero;
    this.premiada = this.porta.premiada;
  }

  reiniciaJogo() {
    this.selecionada = false;
    this.aberta = false;
  }

}
