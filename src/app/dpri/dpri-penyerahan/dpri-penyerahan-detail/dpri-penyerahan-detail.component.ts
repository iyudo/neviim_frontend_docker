import { Component, OnInit } from '@angular/core';
import {titleDpriPenyerahanEdit, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-dpri-penyerahan-detail',
  templateUrl: './dpri-penyerahan-detail.component.html',
  styleUrls: ['./dpri-penyerahan-detail.component.css']
})
export class DpriPenyerahanDetailComponent implements OnInit {

  title:string = titleDpriPenyerahanEdit;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
