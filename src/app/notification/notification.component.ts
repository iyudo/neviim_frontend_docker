import { Component, OnInit } from '@angular/core';
import {titleNotif, RouterUrl} from '../app.var';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  title:string = titleNotif;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
