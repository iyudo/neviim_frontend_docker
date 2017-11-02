import { Component, OnInit } from '@angular/core';
import {titleJd} from '../../../app.var';

@Component({
  selector: 'app-tambahjd',
  templateUrl: './tambahjd.component.html',
  styleUrls: ['./tambahjd.component.css']
})
export class TambahjdComponent implements OnInit {

  title: string = titleJd;

  constructor() { }

  ngOnInit() {
  }

}
