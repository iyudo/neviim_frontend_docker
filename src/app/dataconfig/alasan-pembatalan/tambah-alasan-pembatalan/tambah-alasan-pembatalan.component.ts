import { Component, OnInit } from '@angular/core';
import {titlePembatalan, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-alasan-pembatalan',
  templateUrl: './tambah-alasan-pembatalan.component.html',
  styleUrls: ['./tambah-alasan-pembatalan.component.css']
})
export class TambahAlasanPembatalanComponent implements OnInit {

  title:string = titlePembatalan;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
