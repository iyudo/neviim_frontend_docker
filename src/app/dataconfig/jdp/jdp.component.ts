import { Component, OnInit } from '@angular/core';
import {titleJdp} from '../../app.var';

@Component({
  selector: 'app-jdp',
  templateUrl: './jdp.component.html',
  styleUrls: ['./jdp.component.css']
})
export class JdpComponent implements OnInit {

  title:string = titleJdp;

  constructor() { }

  ngOnInit() {
  }

}
