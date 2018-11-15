import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Include all the pages visible on the sidemenu here
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyworkoutsPage } from '../pages/myworkouts/myworkouts';
import { ProgressPage } from '../pages/progress/progress';


//Import the AngularFireAuth
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
//changed this to LoginPage /hh
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private angularFireAuth: AngularFireAuth) {
    this.initializeApp();

    // used for ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage},
      { title: 'My workouts', component: MyworkoutsPage},
      { title: 'Progress', component: ProgressPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //If authenticated user make rootpage homepage otherwise direct to loginpage
      this.angularFireAuth.auth.onAuthStateChanged(function(user)
     {
       if (user) {
       this.rootPage = HomePage;
     }
     else {
     this.rootPage = LoginPage;

     }
   });
    });
  }
//Push to the rootpage on start
ngOnInit() {
  this.nav.push(this.rootPage);
 }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
