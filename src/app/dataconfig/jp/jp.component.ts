import { Component, OnInit } from '@angular/core';
import {titleJp} from '../../app.var';

@Component({
  selector: 'app-jp',
  templateUrl: './jp.component.html',
  styleUrls: ['./jp.component.css']
})
export class JpComponent implements OnInit {

  title:string = titleJp;

  constructor() { }

  ngOnInit() {
  }

}
