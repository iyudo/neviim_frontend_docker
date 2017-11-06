import { Component, OnInit } from '@angular/core';
import {titleDpriPerm} from '../../app.var';

@Component({
  selector: 'app-dpri-permohonan',
  templateUrl: './dpri-permohonan.component.html',
  styleUrls: ['./dpri-permohonan.component.css']
})
export class DpriPermohonanComponent implements OnInit {

  title:string = titleDpriPerm;

  constructor() { }

  ngOnInit() {
  }

}
