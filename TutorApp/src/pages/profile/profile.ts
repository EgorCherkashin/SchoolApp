import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
		this.auth.signOut();
		this.navCtrl.setRoot(LoginPage);
	}

}

