import { Component, OnInit } from '@angular/core';
import {titleSplpAlokasi} from '../../app.var';

@Component({
  selector: 'app-splp-alokasi',
  templateUrl: './splp-alokasi.component.html',
  styleUrls: ['./splp-alokasi.component.css']
})
export class SplpAlokasiComponent implements OnInit {

  title:string = titleSplpAlokasi;

  constructor() { }

  ngOnInit() {
  }

}
