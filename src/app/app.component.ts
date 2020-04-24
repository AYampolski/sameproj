import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Tracking',
      url: '/pages/tracking',
      icon: 'mail',
    },
    {
      title: 'Job Notifications',
      url: '/pages/job-notification',
      icon: 'paper-plane',
    },
    {
      title: 'Login',
      url: '/pages/auth',
      icon: 'paper-plane',
    },
    {
      title: 'Browser-view',
      url: '/pages/browser-view',
      icon: 'mail',
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  openBrowser() {
    // cordova.InAppBrowser.open('https://youtube.com/', '_blank', 'usewkwebview=yes');
    this.iab.create('https://youtube.com/', '_system');
  }
}
