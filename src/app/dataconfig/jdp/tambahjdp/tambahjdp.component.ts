import { Component, OnInit } from '@angular/core';
import {titleJdp} from '../../../app.var';

@Component({
  selector: 'app-tambahjdp',
  templateUrl: './tambahjdp.component.html',
  styleUrls: ['./tambahjdp.component.css']
})
export class TambahjdpComponent implements OnInit {

  title:string = titleJdp;

  constructor() { }

  ngOnInit() {
  }

}
