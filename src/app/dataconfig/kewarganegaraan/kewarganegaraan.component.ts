import { Component, OnInit } from '@angular/core';
import {titleKewarganegaraan, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-kewarganegaraan',
  templateUrl: './kewarganegaraan.component.html',
  styleUrls: ['./kewarganegaraan.component.css']
})
export class KewarganegaraanComponent implements OnInit {

  title:string = titleKewarganegaraan;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
