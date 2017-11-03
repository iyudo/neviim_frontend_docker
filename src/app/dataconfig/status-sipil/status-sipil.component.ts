import { Component, OnInit } from '@angular/core';
import {titleSs} from '../../app.var';

@Component({
  selector: 'app-status-sipil',
  templateUrl: './status-sipil.component.html',
  styleUrls: ['./status-sipil.component.css']
})
export class StatusSipilComponent implements OnInit {
  
  title:string = titleSs;

  constructor() { }

  ngOnInit() {
  }

}
