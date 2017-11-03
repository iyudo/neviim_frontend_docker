import { Component, OnInit } from '@angular/core';
import {titleMk} from '../../app.var';

@Component({
  selector: 'app-manajemen-kanim',
  templateUrl: './manajemen-kanim.component.html',
  styleUrls: ['./manajemen-kanim.component.css']
})
export class ManajemenKanimComponent implements OnInit {

  title:string = titleMk;

  constructor() { }

  ngOnInit() {
  }

}
