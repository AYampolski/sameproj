import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  logForm() {
    this.auth.emailLogin('ogo@procoders.tech', 'procoderstest').subscribe(next => {
      console.log('NEXT: ', next);
    },
    error => {
      console.log('ERROR: ', error);
    },
    () => {
      console.log('COMPLETE');
    })
  }
}
