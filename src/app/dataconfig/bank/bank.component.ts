import { Component, OnInit } from '@angular/core';
import {titleBank, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  title:string = titleBank;

  routerUrl = RouterUrl;

  constructor() { }

  ngOnInit() {
  }

}
