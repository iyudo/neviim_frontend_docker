import { Component, OnInit } from '@angular/core';
import {titlePp} from '../../app.var';

@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {

  title:string = titlePp;

  constructor() { }

  ngOnInit() {
  }

}
