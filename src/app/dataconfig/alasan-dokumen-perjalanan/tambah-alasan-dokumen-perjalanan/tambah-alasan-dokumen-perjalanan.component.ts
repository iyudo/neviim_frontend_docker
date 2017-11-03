import { Component, OnInit } from '@angular/core';
import {titleAdp} from '../../../app.var';

@Component({
  selector: 'app-tambah-alasan-dokumen-perjalanan',
  templateUrl: './tambah-alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./tambah-alasan-dokumen-perjalanan.component.css']
})
export class TambahAlasanDokumenPerjalananComponent implements OnInit {

  title:string = titleAdp;

  constructor() { }

  ngOnInit() {
  }

}
