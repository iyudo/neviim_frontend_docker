import { Component, OnInit } from '@angular/core';
import {titleAppr, RouterUrl} from '../app.var';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  title:string = titleAppr;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
