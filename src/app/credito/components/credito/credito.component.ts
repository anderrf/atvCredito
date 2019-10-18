import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private somarCredito: CreditoService) { }
  
  private _valor: number;

  ngOnInit() {
    this._valor = 10;
  }

  calcula(valorRecebido: number){
    this._valor = this.somarCredito.somarCredito(this._valor, valorRecebido);
  }

  get pegaValor(){
    return this._valor;
  }

}
