import { Component, OnInit } from '@angular/core';
import {titleMk} from '../../app.var';

@Component({
  selector: 'app-mk',
  templateUrl: './mk.component.html',
  styleUrls: ['./mk.component.css']
})
export class MkComponent implements OnInit {

  title:string = titleMk;

  constructor() { }

  ngOnInit() {
  }

}
