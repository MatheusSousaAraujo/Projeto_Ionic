import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  public disciplinas=[
    {nome:"Matematica",semestre:"02/2025"},
    {nome:"Portugues ",semestre:"01/2025"}
  ]

  constructor() { }

  adicionar(nome:string,semestre:string){
    this.disciplinas.push({nome: nome, semestre: semestre})
  }

  buscar():any{
    return this.disciplinas;
  }
}
