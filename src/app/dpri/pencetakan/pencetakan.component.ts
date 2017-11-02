import { Component, OnInit } from '@angular/core';
import {titleDpriPencetakan} from '../../app.var';

@Component({
  selector: 'app-pencetakan',
  templateUrl: './pencetakan.component.html',
  styleUrls: ['./pencetakan.component.css']
})
export class PencetakanComponent implements OnInit {

  title:string = titleDpriPencetakan;

  constructor() { }

  ngOnInit() {
  }

}
