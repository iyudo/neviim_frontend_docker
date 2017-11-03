import { Component, OnInit } from '@angular/core';
import {titlePp} from '../../app.var';

@Component({
  selector: 'app-persyaratan-pengajuan',
  templateUrl: './persyaratan-pengajuan.component.html',
  styleUrls: ['./persyaratan-pengajuan.component.css']
})
export class PersyaratanPengajuanComponent implements OnInit {

  title:string = titlePp;

  constructor() { }

  ngOnInit() {
  }

}
