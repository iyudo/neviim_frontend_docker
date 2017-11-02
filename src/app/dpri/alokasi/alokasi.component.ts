import { Component, OnInit } from '@angular/core';
import {titleDpriAlok} from '../../app.var';

@Component({
  selector: 'app-alokasi',
  templateUrl: './alokasi.component.html',
  styleUrls: ['./alokasi.component.css']
})
export class AlokasiComponent implements OnInit {

  title:string = titleDpriAlok;

  constructor() { }

  ngOnInit() {
  }

}
