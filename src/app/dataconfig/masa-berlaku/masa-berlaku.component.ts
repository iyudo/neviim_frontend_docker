import { Component, OnInit } from '@angular/core';
import {titleMb} from '../../app.var';

@Component({
  selector: 'app-masa-berlaku',
  templateUrl: './masa-berlaku.component.html',
  styleUrls: ['./masa-berlaku.component.css']
})
export class MasaBerlakuComponent implements OnInit {
  
  title:string = titleMb;
  
  constructor() { }

  ngOnInit() {
  }

}
