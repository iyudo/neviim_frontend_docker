import { Component, OnInit } from '@angular/core';
import {titleMk} from '../../../app.var';

@Component({
  selector: 'app-tambahmk',
  templateUrl: './tambahmk.component.html',
  styleUrls: ['./tambahmk.component.css']
})
export class TambahmkComponent implements OnInit {

  title:string = titleMk;

  constructor() { }

  ngOnInit() {
  }

}
