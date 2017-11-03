import { Component, OnInit } from '@angular/core';
import {titleMk} from '../../../app.var';

@Component({
  selector: 'app-tambah-manajemen-kanim',
  templateUrl: './tambah-manajemen-kanim.component.html',
  styleUrls: ['./tambah-manajemen-kanim.component.css']
})
export class TambahManajemenKanimComponent implements OnInit {

  title:string = titleMk;

  constructor() { }

  ngOnInit() {
  }

}
