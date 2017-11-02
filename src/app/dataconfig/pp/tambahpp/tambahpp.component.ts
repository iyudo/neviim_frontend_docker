import { Component, OnInit } from '@angular/core';
import {titlePp} from '../../../app.var';

@Component({
  selector: 'app-tambahpp',
  templateUrl: './tambahpp.component.html',
  styleUrls: ['./tambahpp.component.css']
})
export class TambahppComponent implements OnInit {

  title:string = titlePp;

  constructor() { }

  ngOnInit() {
  }

}
