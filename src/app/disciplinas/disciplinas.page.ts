import { DadosService } from '../dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.page.html',
  styleUrls: ['./disciplinas.page.scss'],
  standalone:false,
})
export class DisciplinasPage implements OnInit {

  public disciplinasLocal:any;

  constructor(public dadosService:DadosService) {
    this.disciplinasLocal=this.dadosService.buscar();
  }
  

  ngOnInit() {
  }

}
