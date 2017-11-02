import { Component, OnInit } from '@angular/core';
import {titleJd} from '../../app.var';

@Component({
  selector: 'app-jd',
  templateUrl: './jd.component.html',
  styleUrls: ['./jd.component.css']
})
export class JdComponent implements OnInit {

  title:string = titleJd;

  constructor() { }

  ngOnInit() {
  }

}
