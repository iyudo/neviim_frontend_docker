import { Component, OnInit } from '@angular/core';
import {titleDpriPenyerahanEdit} from '../../../app.var';

@Component({
  selector: 'app-penyerahan-edit',
  templateUrl: './penyerahan-edit.component.html',
  styleUrls: ['./penyerahan-edit.component.css']
})
export class PenyerahanEditComponent implements OnInit {

  title:string = titleDpriPenyerahanEdit;

  constructor() { }

  ngOnInit() {
  }

}
