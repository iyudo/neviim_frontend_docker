import { Component, OnInit } from '@angular/core';
import {titleBank, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambahbank',
  templateUrl: './tambahbank.component.html',
  styleUrls: ['./tambahbank.component.css']
})
export class TambahbankComponent implements OnInit {

  title:string = titleBank; 

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
