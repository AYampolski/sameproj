import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { OrderModel } from '../../../../models/order.model';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() order: OrderModel;
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    // svg = "SVG CONTENT"
    // this.dataContainer.nativeElement.innerHTML = svg;
  }

}
