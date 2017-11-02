import { Component, OnInit } from '@angular/core';
import {titleDpriAlokEdit} from '../../../app.var';

@Component({
  selector: 'app-alokasi-edit',
  templateUrl: './alokasi-edit.component.html',
  styleUrls: ['./alokasi-edit.component.css']
})
export class AlokasiEditComponent implements OnInit {

  title:string = titleDpriAlokEdit;

  constructor() { }

  ngOnInit() {
  }

}
