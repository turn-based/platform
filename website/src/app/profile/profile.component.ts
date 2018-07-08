import { Component, OnInit } from '@angular/core';
import { Auth0UserProfile } from 'auth0-js';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profile: Auth0UserProfile;

  constructor(public auth: AuthService) {
  }

  async ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.profile = await this.auth.getProfile();
    }
    console.log(this.profile)
  }

}
