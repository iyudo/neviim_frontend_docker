import { Component, OnInit } from '@angular/core';
import { AlasanDokPerjalanan } from '../../../_model/dpri/alasan-dok-perjalanan';
import { User } from '../../../_model/_common/user';
import { RouterUrl } from '../../../app.var';
import { Router } from '@angular/router';
import { AlasanDokPerjalananService } from '../../../_service/dpri/alasan-dok-perjalanan.service';

@Component({
  selector: 'app-edit-alasan-dokumen-perjalanan',
  templateUrl: './edit-alasan-dokumen-perjalanan.component.html',
  styleUrls: ['./edit-alasan-dokumen-perjalanan.component.css']
})
export class EditAlasanDokumenPerjalananComponent implements OnInit {

  alasanDokPerjalanan: AlasanDokPerjalanan = new AlasanDokPerjalanan()
  user: User = new User()
  
  routerUrl = RouterUrl;
  
  constructor(
    private router: Router,
    private alasanDokPerjalananService: AlasanDokPerjalananService,
  ) {}

  ngOnInit() {
  }

  onFindOne() {

  }

}
