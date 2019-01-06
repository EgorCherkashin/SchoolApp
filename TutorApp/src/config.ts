import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyCGJE0689oZgfnOAmwjrOzCJAzQkwyJwME",
		authDomain: "tutorapp-53148.firebaseapp.com",
		databaseURL: "https://tutorapp-53148.firebaseio.com",
		projectId: "tutorapp-53148",
		storageBucket: "tutorapp-53148.appspot.com",
		messagingSenderId: "686250006297"
	}
};
