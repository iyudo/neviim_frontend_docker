import { Component, OnInit, ViewChild } from '@angular/core';
import {titleJdp} from '../../app.var';
import { JenisDokumenPerjalananService } from '../../_service/dpri/jenis-dokumen-perjalanan.service';
import { JenisDokumenPerjalanan } from '../../_model/dpri/jenis-dokumen-perjalanan';
import { DataTable } from 'angular2-datatable';
import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../app.var';

@Component({
  selector: 'app-jenis-dokumen-perjalanan',
  templateUrl: './jenis-dokumen-perjalanan.component.html',
  styleUrls: ['./jenis-dokumen-perjalanan.component.css']
})
export class JenisDokumenPerjalananComponent implements OnInit {

  title:string = titleJdp;
  private data: JenisDokumenPerjalanan[] = [];
  private error: any = '';
  activePage: number = 1;
  rowsOnPage: number = 2;
  jenisDokPerjalanan: JenisDokumenPerjalanan[] = []
  @ViewChild(DataTable) child: DataTable;

  constructor(private jenisDokumenPerjalananService: JenisDokumenPerjalananService) { }

  routerUrl = RouterUrl;

  ngOnInit() {
    this.loadJenisDokPerjalanan();
  }

  loadJenisDokPerjalanan() {
    this.jenisDokumenPerjalananService.getAllData().subscribe(
      resp => {
        this.data = resp
        this.child.setPage(this.activePage,this.rowsOnPage);
      },
      error => {
        this.error = <any>error
      }
    )
  }

  setNewPage(activePage: number) {
    this.activePage=activePage;
    this.child.setPage(activePage, this.rowsOnPage);
  }

  onDeleteJenisDokPerjalanan() {
    if(this.jenisDokPerjalanan.length > 0) {
      this.jenisDokumenPerjalananService.delete("").subscribe(
        output => {
          console.log(output);
          this.loadJenisDokPerjalanan();
        },
        error => {
          console.log(error);
        }
      )
    } else {
      console.log("Empty Data!");
    }
  }

  select(category, event) {
    var index = this.jenisDokPerjalanan.indexOf(event.target.value);
    if (event.target.checked) {
        this.jenisDokPerjalanan.push(event.target.value);
     } else {
        if (index !== -1) {
            this.jenisDokPerjalanan.splice(index, 1);
        }
    }
    console.log(this.jenisDokPerjalanan);
  }

}
