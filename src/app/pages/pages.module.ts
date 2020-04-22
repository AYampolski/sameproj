import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';

import { AuthComponent } from './auth/auth.component';
import { JobNotificationComponent } from './job-notification/job-notification.component';
import { TrackingComponent } from './tracking/tracking.component';


const MODULES = [ CommonModule, PagesRoutingModule, IonicModule];
const PAGES = [AuthComponent, JobNotificationComponent, TrackingComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [
    ...MODULES
  ]
})
export class PagesModule { }
