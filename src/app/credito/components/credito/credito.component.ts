import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private somarCredito: CreditoService) { 
    private _valor: number;
  }

  ngOnInit() {
    this._valor = 10;
  }

  calcula(valorRecebido:number, tipo:string){
    this._valor = this.credito.somarCredito(this.valor,valorRecebido);
    if (tipo == "um")
    {
      this._valor + 1;
    }
    else if(tipo == "dez")
    {
      this._valor + 2;
    }
    else if(tipo == "cem")
    {
      this._valor + 100;
    }
    else if(tipo == "descontar")
    {
      this._valor - 1;
    }
  }

  get pegaValor(){
    return this._valor
  }

}
