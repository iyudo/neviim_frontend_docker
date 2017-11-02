import { Component, OnInit } from '@angular/core';
import {titleDpriPemb} from '../../app.var';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.css']
})
export class PembayaranComponent implements OnInit {

  title:string = titleDpriPemb;

  constructor() { }

  ngOnInit() {
  }

}
