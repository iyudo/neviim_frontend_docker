import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';

@Component({
  selector: 'app-tambah-jenis-dokumen-perjalanan',
  templateUrl: './tambah-jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./tambah-jenis-dokumen-perjalanan.component.css']
})
export class TambahJenisDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
