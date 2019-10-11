import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(CreditoService: CreditoService) { 
    
  }

  ngOnInit() {
  }

}
