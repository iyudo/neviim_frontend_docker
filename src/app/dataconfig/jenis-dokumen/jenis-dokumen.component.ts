import { Component, OnInit } from '@angular/core';
import {titleJd, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-jenis-dokumen',
  templateUrl: './jenis-dokumen.component.html',
  styleUrls: ['./jenis-dokumen.component.css']
})
export class JenisDokumenComponent implements OnInit {

  title:string = titleJd;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
