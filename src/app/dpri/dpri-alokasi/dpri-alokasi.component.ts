import { Component, OnInit } from '@angular/core';
import {titleDpriAlok, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-dpri-alokasi',
  templateUrl: './dpri-alokasi.component.html',
  styleUrls: ['./dpri-alokasi.component.css']
})
export class DpriAlokasiComponent implements OnInit {

  title:string = titleDpriAlok;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
