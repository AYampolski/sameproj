import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-browser-view',
  templateUrl: './browser-view.component.html',
  styleUrls: ['./browser-view.component.scss'],
})
export class BrowserViewComponent implements OnInit {

  constructor(private iab: InAppBrowser ) {

  }

  ngOnInit() {}

  openBlank() {
    this.iab.create('https://9gag.com/', '_blank');
  }
}
