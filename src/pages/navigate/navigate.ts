import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

export interface Location{
  lat: Number,
  lng: Number
}

@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})
export class NavigatePage {

  marker: any;
  map: any;
  name: string;
  myLocation: Location;

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
    this.myLocation = {lat: -25.363, lng: 131.044};
    console.log(this.myLocation)
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: this.myLocation
    });
    this.marker = new google.maps.Marker({
      position: this.myLocation,
      map: this.map
    });
  }

  locateMe(){
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.myLocation = { 
        lat: position.coords.latitude, 
        lng: position.coords.longitude
      }
      console.log(this.myLocation)
      this.marker.setPosition(this.myLocation);
      this.map.panTo(this.myLocation);
      this.map.setZoom(15);
    }, error => {
      console.error(error);
    }, options);
  }

}
