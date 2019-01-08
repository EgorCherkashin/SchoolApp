import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(ProfilePage),
				error => this.loginError = error.message
			);
    }

  signup(){
    this.navCtrl.push(SignupPage);
	}
	
  // loginWithGoogle() {
  // this.auth.signInWithGoogle()
  //   .then(
  //     () => this.navCtrl.setRoot(ProfilePage),
  //     error => console.log(error.message)
	// 	);
	
	LoginWithGoogle(){
		firebase.auth().getRedirectResult().then(function(result) {
			if (result.credential) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken; // This WORKS don't question it!!!
				// ...
			}
			// The signed-in user info.
			var user = result.user;
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
	};
}