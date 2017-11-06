import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-alasan-dokumen-perjalanan',
  templateUrl: './alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./alasan-dokumen-perjalanan.component.css']
})
export class AlasanDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;

  routerUrl = RouterUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
