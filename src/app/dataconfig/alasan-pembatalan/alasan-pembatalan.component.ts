import { Component, OnInit } from '@angular/core';
import {titlePembatalan} from '../../app.var';

@Component({
  selector: 'app-alasan-pembatalan',
  templateUrl: './alasan-pembatalan.component.html',
  styleUrls: ['./alasan-pembatalan.component.css']
})
export class AlasanPembatalanComponent implements OnInit {

  title:string = titlePembatalan;

  constructor() { }

  ngOnInit() {
  }

}
