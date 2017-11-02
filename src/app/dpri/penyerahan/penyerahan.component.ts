import { Component, OnInit } from '@angular/core';
import {titleDpriPenyerahan} from '../../app.var';

@Component({
  selector: 'app-penyerahan',
  templateUrl: './penyerahan.component.html',
  styleUrls: ['./penyerahan.component.css']
})
export class PenyerahanComponent implements OnInit {

  title:string = titleDpriPenyerahan;

  constructor() { }

  ngOnInit() {
  }

}
