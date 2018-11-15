import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; //Importing AngularFireAuth

//Import the pages for method-links here
import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';

@Component({
 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {

  password: string;
  email: string;

 constructor(public navCtrl: NavController, public navParams: NavParams,
 public angularFireAuth: AngularFireAuth) { //Adding the angularFireAuth here
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

 

//The functions "register" and "login" :
register(email, password) {
this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
 this.navCtrl.setRoot(RegisterPage, {email});
});
}
login(email, password) {
 this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
   this.navCtrl.setRoot(HomePage, {email});
 });
}
}

