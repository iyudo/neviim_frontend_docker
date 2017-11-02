import { Component, OnInit } from '@angular/core';
import {titleJp} from '../../../app.var';

@Component({
  selector: 'app-tambahjp',
  templateUrl: './tambahjp.component.html',
  styleUrls: ['./tambahjp.component.css']
})
export class TambahjpComponent implements OnInit {

  title:string = titleJp;
  

  constructor() { }

  ngOnInit() {
  }

}
