import { Component, OnInit } from '@angular/core';
import {titleAppr} from '../app.var';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  title:string = titleAppr;

  constructor() { }

  ngOnInit() {
  }

}
