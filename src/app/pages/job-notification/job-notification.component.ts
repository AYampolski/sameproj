import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-notification',
  templateUrl: './job-notification.component.html',
  styleUrls: ['./job-notification.component.scss'],
})
export class JobNotificationComponent implements OnInit {
  orders = [
    {
      vehicleIcon: 'bike',
      vehicleType: 'up to 2.4m',
      estimateTime: 'ASAP',
      locationPickUp: 'Sandhurts GU47',
      locationDropOff: 'Saffron Walden CB10',
    },
    {
      vehicleIcon: 'swb',
      vehicleType: 'small',
      estimateTime: 'ASAP',
      locationPickUp: 'London, UK',
      locationDropOff: 'UK',
    },
    {
      vehicleIcon: 'van',
      vehicleType: 'Empty Vehicle',
      estimateTime: 'ASAP',
      locationPickUp: 'London NW10',
      locationDropOff: 'Manchester, UK',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
