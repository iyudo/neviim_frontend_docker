import { Component, OnInit } from '@angular/core';
import {titleDpriPerm} from '../../app.var';

@Component({
  selector: 'app-permohonan',
  templateUrl: './permohonan.component.html',
  styleUrls: ['./permohonan.component.css']
})
export class PermohonanComponent implements OnInit {

  title:string = titleDpriPerm;

  constructor() { }

  ngOnInit() {
  }

}
