import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login'; 
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'left-menu',
  templateUrl: 'left-menu.html'
})
export class LeftMenuComponent {

  isActive = true;

  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebase: AngularFireAuth
  ){}

  activeButton() {
    this.isActive = !this.isActive;
  }


  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') ? true : false;
  }
  
  logInOrSignIn() {
    if (this.firebase.auth.currentUser) {
      this.navCtrl.parent.select(2);
    }
    else {
      this.navCtrl.push(LoginPage);
    }
  }
  
}
