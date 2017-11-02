import { Component, OnInit } from '@angular/core';
import {titleMb} from '../../../app.var';

@Component({
  selector: 'app-tambahmb',
  templateUrl: './tambahmb.component.html',
  styleUrls: ['./tambahmb.component.css']
})
export class TambahmbComponent implements OnInit {

  title:string = titleMb;

  constructor() { }

  ngOnInit() {
  }

}
