import { Component, OnInit } from '@angular/core';
import {titleDpriPencetakan} from '../../app.var';

@Component({
  selector: 'app-dpri-pencetakan',
  templateUrl: './dpri-pencetakan.component.html',
  styleUrls: ['./dpri-pencetakan.component.css']
})
export class DpriPencetakanComponent implements OnInit {

  title:string = titleDpriPencetakan;

  constructor() { }

  ngOnInit() {
  }

}
