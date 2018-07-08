import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';

interface IApiResponse {
  message: string;
}

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent {

  API_URL = 'http://localhost:2567/authorized';
  message;

  constructor(public auth: AuthService, private http: HttpClient) {}

  public securedPing(): void {
    this.http.get(this.API_URL, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    })
      .subscribe(
        data => this.message = data,
        error => this.message = error
      );
  }
}
