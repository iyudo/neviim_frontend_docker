import { Component, OnInit } from '@angular/core';
import {titleJp} from '../../../app.var';

@Component({
  selector: 'app-tambah-jenis-permohonan',
  templateUrl: './tambah-jenis-permohonan.component.html',
  styleUrls: ['./tambah-jenis-permohonan.component.css']
})
export class TambahJenisPermohonanComponent implements OnInit {

  title:string = titleJp;

  constructor() { }

  ngOnInit() {
  }

}