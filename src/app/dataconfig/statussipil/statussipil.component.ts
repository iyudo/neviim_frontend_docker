import { Component, OnInit } from '@angular/core';
import {titleSs} from '../../app.var';

@Component({
  selector: 'app-statussipil',
  templateUrl: './statussipil.component.html',
  styleUrls: ['./statussipil.component.css']
})
export class StatussipilComponent implements OnInit {

  title:string = titleSs;

  constructor() { }

  ngOnInit() {
  }

}
