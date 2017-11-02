import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material';
import {titleMb} from '../../app.var';

@Component({
  selector: 'app-mb',
  templateUrl: './mb.component.html',
  styleUrls: ['./mb.component.css']
})
export class MbComponent implements OnInit {

  title:string = titleMb;

  constructor() { }

  ngOnInit() {
  }

}
