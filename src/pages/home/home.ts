import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre: String;

  constructor(public navCtrl: NavController) {

  }

  mostrarNombre(){
    console.log(this.nombre)
  }

  irNavigate(){
    this.navCtrl.push("NavigatePage", { name: this.nombre})
  } 

}
