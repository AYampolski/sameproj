import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';

import { AuthComponent } from './auth/auth.component';
import { JobNotificationComponent } from './job-notification/job-notification.component';
import { TrackingComponent } from './tracking/tracking.component';

import { NotificationCardComponent } from './job-notification/components/notification-card/notification-card.component';

@NgModule({
  declarations: [
    AuthComponent,
    JobNotificationComponent,
    TrackingComponent,
    NotificationCardComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, IonicModule],
  providers: []
})
export class PagesModule {}
