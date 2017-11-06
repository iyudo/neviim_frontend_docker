import { Component, OnInit } from '@angular/core';
import {titleSs, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-status-sipil',
  templateUrl: './status-sipil.component.html',
  styleUrls: ['./status-sipil.component.css']
})
export class StatusSipilComponent implements OnInit {
  
  title:string = titleSs;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
