import { Component, OnInit } from '@angular/core';
import {titleSs} from '../../../app.var';

@Component({
  selector: 'app-tambahss',
  templateUrl: './tambahss.component.html',
  styleUrls: ['./tambahss.component.css']
})
export class TambahssComponent implements OnInit {

  title:string = titleSs;

  constructor() { }

  ngOnInit() {
  }

}
