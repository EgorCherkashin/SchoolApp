import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth.service'
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import {App, MenuController, NavController} from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  private app;
	private platform;
	private menu: MenuController;
  constructor(app: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    this.platform = platform;
    this.initializeApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  initializeApp() {
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
    }

    login() {
      this.auth.signOut();
      this.rootPage(LoginPage);
    }
  
    logout() {
      this.auth.signOut();
      this.rootPage(HomePage);
    }
}
