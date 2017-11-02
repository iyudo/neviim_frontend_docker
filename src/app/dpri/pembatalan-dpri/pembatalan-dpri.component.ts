import { Component, OnInit } from '@angular/core';
import {titleDpriPembatalan} from '../../app.var';

@Component({
  selector: 'app-pembatalan-dpri',
  templateUrl: './pembatalan-dpri.component.html',
  styleUrls: ['./pembatalan-dpri.component.css']
})
export class PembatalanDpriComponent implements OnInit {

  title:string = titleDpriPembatalan;

  constructor() { }

  ngOnInit() {
  }

}
