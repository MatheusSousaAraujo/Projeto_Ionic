import { DadosService } from '../dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {
  public nome: any;
  public semestre: any;
  public showSuccessMessage: boolean = false; 

  constructor(public dadosService: DadosService) {}

  adicionar() {
    this.dadosService.adicionar(this.nome, this.semestre);

    this.nome = '';
    this.semestre = '';

   
    this.showSuccessMessage = true;

    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000); 
  }

  ngOnInit() {}
}
