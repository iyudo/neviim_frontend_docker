import { Component, OnInit } from '@angular/core';
import { titleAdp, RouterUrl } from '../../app.var';
import { Router } from '@angular/router';
import { AlasanDokPerjalananService } from '../../_service/dpri/alasan-dok-perjalanan.service';
import { AlasanDokPerjalanan } from '../../_model/dpri/alasan-dok-perjalanan';

@Component({
  selector: 'app-alasan-dokumen-perjalanan',
  templateUrl: './alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./alasan-dokumen-perjalanan.component.css']
})
export class AlasanDokumenPerjalananComponent implements OnInit {

  title: string = titleAdp;

  routerUrl = RouterUrl;

  alasanDokPerjalanans: AlasanDokPerjalanan[] = []

  constructor(
    private router: Router,
    private alasanDokPerjalananService: AlasanDokPerjalananService
  ) { }

  ngOnInit() {
    this.onLoadAdp()
  }

  onLoadAdp() {
    this.alasanDokPerjalananService.loadAll().subscribe(
      output => {
        if (output) {
          //this console log should be remove
          console.log(output)
          this.alasanDokPerjalanans = output
        }
      }, error => {
        console.log(error)
      });
  }

  onCheckedAdp(e) {
    if (e.target.checked) {
      console.log("checked");
    }
  }

}
