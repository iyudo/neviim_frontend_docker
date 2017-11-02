import { Component, OnInit } from '@angular/core';
import {titleAdp} from '../../app.var';

@Component({
  selector: 'app-adp',
  templateUrl: './adp.component.html',
  styleUrls: ['./adp.component.css']
})
export class AdpComponent implements OnInit {

  title:string = titleAdp;

  constructor() { }

  ngOnInit() {
  }

}
