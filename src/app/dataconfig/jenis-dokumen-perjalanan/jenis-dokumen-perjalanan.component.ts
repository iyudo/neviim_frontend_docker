import { Component, OnInit } from '@angular/core';
import {titleJdp} from '../../app.var';

@Component({
  selector: 'app-jenis-dokumen-perjalanan',
  templateUrl: './jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./jenis-dokumen-perjalanan.component.css']
})
export class JenisDokumenPerjalananComponent implements OnInit {

  title:string = titleJdp;

  constructor() { }

  ngOnInit() {
  }

}
