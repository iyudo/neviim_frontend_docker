import { Component, OnInit } from '@angular/core';
import {TitleConfig, RouterUrl} from '../../../app.var';
import { Router } from '@angular/router';
import { AlasanDokPerjalananService } from '../../../_service/dpri/alasan-dok-perjalanan.service';
import { AlasanDokPerjalanan } from '../../../_model/dpri/alasan-dok-perjalanan';
import { User } from '../../../_model/_common/user';


@Component({
  selector: 'app-tambah-alasan-dokumen-perjalanan',
  templateUrl: './tambah-alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./tambah-alasan-dokumen-perjalanan.component.css']
})
export class TambahAlasanDokumenPerjalananComponent implements OnInit {

  title = TitleConfig;
  
  alasanDokPerjalanan: AlasanDokPerjalanan = new AlasanDokPerjalanan()
  user: User = new User()

  routerUrl = RouterUrl;

  constructor(
    private router: Router,
    private alasanDokPerjalananService: AlasanDokPerjalananService
  ) { }


  ngOnInit() {
    this.onLoadNewId()
  }

  onLoadNewId() {
    this.alasanDokPerjalananService.loadNewID().subscribe(
      output => {
        this.alasanDokPerjalanan = output
      }, error => {
        console.log("error load category\n" + error)
      }
    )
  }

  onAdpSave() {
    // this.user.userId = '74b59cfe-6ecb-4b76-b396-9f0a09f6510a'
    // this.alasanDokPerjalanan.user.u = this.user
    this.alasanDokPerjalanan.user.userId = '74b59cfe-6ecb-4b76-b396-9f0a09f6510a'
    this.alasanDokPerjalanan.active = 'aktif' ? true: false
    this.alasanDokPerjalananService.save(this.alasanDokPerjalanan)
    .subscribe(
      success => {
        console.log(success)
        this.alasanDokPerjalanan = new AlasanDokPerjalanan()
        this.router.navigate(['/dataconfig/adp'])
      }, error => {
        console.log('Something Wrong')
        console.log(error)
        // this.alertService.error('Item Input Error', true)
      }
    )
  }
}
