import { Component, OnInit } from '@angular/core';
import {titleAdp} from '../../../app.var';

@Component({
  selector: 'app-tambahadp',
  templateUrl: './tambahadp.component.html',
  styleUrls: ['./tambahadp.component.css']
})
export class TambahadpComponent implements OnInit {

  title:string = titleAdp;

  constructor() { }

  ngOnInit() {
  }

}
