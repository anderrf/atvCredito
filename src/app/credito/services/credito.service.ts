import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor() { }
  somarCredito(valor1: number,valor2: number):number{
    return valor1 + valor2;
  }
}
