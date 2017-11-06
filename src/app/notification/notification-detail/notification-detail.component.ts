import { Component, OnInit } from '@angular/core';
import {titleNotifD, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  title:string = titleNotifD;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
