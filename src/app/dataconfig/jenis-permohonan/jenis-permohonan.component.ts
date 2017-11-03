import { Component, OnInit } from '@angular/core';
import {titleJp} from '../../app.var';

@Component({
  selector: 'app-jenis-permohonan',
  templateUrl: './jenis-permohonan.component.html',
  styleUrls: ['./jenis-permohonan.component.css']
})
export class JenisPermohonanComponent implements OnInit {

  title:string = titleJp;

  constructor() { }

  ngOnInit() {
  }

}
