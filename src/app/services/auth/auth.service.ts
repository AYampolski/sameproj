import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private devApiUrl =
    'http://staging.samedaycouriernetwork.com/api/auth/user/login';
  private devClientId = '1';
  private GRANT_PASSWORD = 'password';
  private devClientSecret = 'SAkrafV8qUqzeFt7';

  constructor(private http: HttpClient) {}

  emailLogin(email: string, password: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers, withCredentials: true };
    let data = {
      grant_type: 'password',

      client_id: this.devClientId,
      client_secret: this.devClientSecret,
    };

    return this.http.post(this.devApiUrl, data, options);
  }
}
