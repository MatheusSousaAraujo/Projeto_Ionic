import { DadosService } from '../dados.service';
import { Component, OnInit } from '@angular/core';
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public disciplinasLocal:any;

  constructor(public dadosService:DadosService) {
    this.disciplinasLocal=this.dadosService.buscar();
   }

  ngOnInit() {
  }

}
