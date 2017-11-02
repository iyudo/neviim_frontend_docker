import { Component, OnInit } from '@angular/core';
import {titlePembatalan} from '../../app.var';

@Component({
  selector: 'app-pembatalan',
  templateUrl: './pembatalan.component.html',
  styleUrls: ['./pembatalan.component.css']
})
export class PembatalanComponent implements OnInit {

  title:string = titlePembatalan;

  constructor() { }

  ngOnInit() {
  }

}
