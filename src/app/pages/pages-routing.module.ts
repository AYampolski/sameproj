import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobNotificationComponent } from './job-notification/job-notification.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'job-notification',
        component: JobNotificationComponent
      },
      {
        path: 'tracking',
        component: TrackingComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
