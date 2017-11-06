import { Component, OnInit } from '@angular/core';
import {titleApprD, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-approval-detail',
  templateUrl: './approval-detail.component.html',
  styleUrls: ['./approval-detail.component.css']
})
export class ApprovalDetailComponent implements OnInit {

  title:string = titleApprD;
  date:any;

  routerUrl = RouterUrl;

  constructor() { 
    
  }

  ngOnInit() {
    this.date = new Date("12/09/2017");
  }

}
