import { Component, OnInit } from '@angular/core';
import {titleSs, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-status-sipil',
  templateUrl: './tambah-status-sipil.component.html',
  styleUrls: ['./tambah-status-sipil.component.css']
})
export class TambahStatusSipilComponent implements OnInit {

  title:string = titleSs;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
