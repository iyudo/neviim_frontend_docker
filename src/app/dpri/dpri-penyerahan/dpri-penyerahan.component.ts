import { Component, OnInit } from '@angular/core';
import {titleDpriPenyerahan, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-dpri-penyerahan',
  templateUrl: './dpri-penyerahan.component.html',
  styleUrls: ['./dpri-penyerahan.component.css']
})
export class DpriPenyerahanComponent implements OnInit {

  title:string = titleDpriPenyerahan;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
