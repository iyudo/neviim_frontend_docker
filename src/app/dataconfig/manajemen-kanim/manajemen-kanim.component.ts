import { Component, OnInit } from '@angular/core';
import {titleMk, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-manajemen-kanim',
  templateUrl: './manajemen-kanim.component.html',
  styleUrls: ['./manajemen-kanim.component.css']
})
export class ManajemenKanimComponent implements OnInit {

  title:string = titleMk;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
