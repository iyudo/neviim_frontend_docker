import { Component, OnInit } from '@angular/core';
import {titlePp, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-persyaratan-pengajuan',
  templateUrl: './tambah-persyaratan-pengajuan.component.html',
  styleUrls: ['./tambah-persyaratan-pengajuan.component.css']
})
export class TambahPersyaratanPengajuanComponent implements OnInit {

  title:string = titlePp;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
