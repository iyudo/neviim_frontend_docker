import { Component, OnInit } from '@angular/core';
import {titlePembatalan} from '../../../app.var';

@Component({
  selector: 'app-tambahap',
  templateUrl: './tambahap.component.html',
  styleUrls: ['./tambahap.component.css']
})
export class TambahapComponent implements OnInit {

  title:string = titlePembatalan;

  constructor() { }

  ngOnInit() {
  }

}
