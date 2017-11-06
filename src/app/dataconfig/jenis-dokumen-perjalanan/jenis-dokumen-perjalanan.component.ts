import { Component, OnInit } from '@angular/core';
import {titleJdp, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-jenis-dokumen-perjalanan',
  templateUrl: './jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./jenis-dokumen-perjalanan.component.css']
})
export class JenisDokumenPerjalananComponent implements OnInit {

  title:string = titleJdp;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
