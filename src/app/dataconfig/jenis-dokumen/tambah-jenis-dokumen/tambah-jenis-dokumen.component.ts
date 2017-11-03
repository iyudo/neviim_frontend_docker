import { Component, OnInit } from '@angular/core';
import {titleJd} from '../../../app.var';

@Component({
  selector: 'app-tambah-jenis-dokumen',
  templateUrl: './tambah-jenis-dokumen.component.html',
  styleUrls: ['./tambah-jenis-dokumen.component.css']
})
export class TambahJenisDokumenComponent implements OnInit {

  title: string = titleJd;

  constructor() { }

  ngOnInit() {
  }

}
