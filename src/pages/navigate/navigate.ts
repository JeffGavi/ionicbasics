import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})
export class NavigatePage {

  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.data;
    //this.name = this.navParams.get("nombre");
    this.name = this.navParams.data;
    console.log(this.name)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigatePage');
  }

}
