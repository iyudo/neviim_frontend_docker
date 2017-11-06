import { Component, OnInit } from '@angular/core';
import {titleKewarganegaraan, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambahkw',
  templateUrl: './tambahkw.component.html',
  styleUrls: ['./tambahkw.component.css']
})
export class TambahkwComponent implements OnInit {

  title:string = titleKewarganegaraan;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
