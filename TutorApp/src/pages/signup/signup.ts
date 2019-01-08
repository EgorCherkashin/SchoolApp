import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	// profile = {} as User
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		public afs: AngularFirestore,
		private navCtrl: NavController,
    private auth: AuthService
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  // addUser(value){
	// return new Promise<any>((resolve, reject) => {
	//   this.afs.collection('/users').add({
	// 	name: value.firstname,
	// 	surname: value.lastname,
	// 	grade: parseInt(value.grade)
	//   })
	//   .then(
	// 	(res) => {
	// 	  resolve(res)
	// 	},
	// 	err => reject(err)
	//   )
	// })
  // }

  

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(ProfilePage),
			error => this.signupError = error.message
		);
  }
}
