import { Component, OnInit } from '@angular/core';
import {titleJdp, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-jenis-dokumen-perjalanan',
  templateUrl: './tambah-jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./tambah-jenis-dokumen-perjalanan.component.css']
})
export class TambahJenisDokumenPerjalananComponent implements OnInit {

  title:string = titleJdp;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
