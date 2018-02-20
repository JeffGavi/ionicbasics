import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

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
    this.name = this.navParams.get("name");
    console.log(this.name)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigatePage');
    this.initMap();
  }
  
  initMap() {
    var myLocation = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLocation
    });
    var marker = new google.maps.Marker({
      position: myLocation,
      map: map
    });
  }

}
