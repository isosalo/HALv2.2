import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Import here all the pages -> also add them to declarations and entryComponents
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyworkoutsPage } from '../pages/myworkouts/myworkouts';
import { ProgressPage } from '../pages/progress/progress';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Importing all the Firebase-components
import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

//Importing the FIREBASE_CONFIG
import { FIREBASE_CONFIG } from '../providers/firebase-credentials/firebase-credentials';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    MyworkoutsPage,
    ProgressPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Importing Firebase-components:
   AngularFireModule.initializeApp(FIREBASE_CONFIG),
   AngularFireDatabaseModule,
   AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    MyworkoutsPage,
    ProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     //Importing Firebase-AngularFirebaseAuth
   AngularFireAuth,
  ]
})
export class AppModule {}
