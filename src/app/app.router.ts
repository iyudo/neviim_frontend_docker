import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import { KewarganegaraanComponent } from './dataconfig/kewarganegaraan/kewarganegaraan.component';
import { BankComponent } from './dataconfig/bank/bank.component';
import { TambahkwComponent } from './dataconfig/kewarganegaraan/tambahkw/tambahkw.component';
import { TambahbankComponent } from './dataconfig/bank/tambahbank/tambahbank.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalDetailComponent } from './approval/approval-detail/approval-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailComponent } from './notification/notification-detail/notification-detail.component';
import { PermohonanComponent } from './dpri/permohonan/permohonan.component';
import { PembayaranComponent } from './dpri/pembayaran/pembayaran.component';
import { AlokasiComponent } from './dpri/alokasi/alokasi.component';
import { AlokasiEditComponent } from './dpri/alokasi/alokasi-edit/alokasi-edit.component';
import { PencetakanComponent } from './dpri/pencetakan/pencetakan.component';
import { PenyerahanComponent } from './dpri/penyerahan/penyerahan.component';
import { PenyerahanEditComponent } from './dpri/penyerahan/penyerahan-edit/penyerahan-edit.component';
import { PembatalanDpriComponent } from './dpri/pembatalan-dpri/pembatalan-dpri.component';
import { AlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/alasan-dokumen-perjalanan.component';
import { TambahAlasanDokumenPerjalananComponent } from './dataconfig/alasan-dokumen-perjalanan/tambah-alasan-dokumen-perjalanan/tambah-alasan-dokumen-perjalanan.component';
import { JenisDokumenComponent } from './dataconfig/jenis-dokumen/jenis-dokumen.component';
import { TambahJenisDokumenComponent } from './dataconfig/jenis-dokumen/tambah-jenis-dokumen/tambah-jenis-dokumen.component';
import { JenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/jenis-dokumen-perjalanan.component';
import { TambahJenisDokumenPerjalananComponent } from './dataconfig/jenis-dokumen-perjalanan/tambah-jenis-dokumen-perjalanan/tambah-jenis-dokumen-perjalanan.component';
import { JenisPermohonanComponent } from './dataconfig/jenis-permohonan/jenis-permohonan.component';
import { TambahJenisPermohonanComponent } from './dataconfig/jenis-permohonan/tambah-jenis-permohonan/tambah-jenis-permohonan.component';
import { MasaBerlakuComponent } from './dataconfig/masa-berlaku/masa-berlaku.component';
import { TambahMasaBerlakuComponent } from './dataconfig/masa-berlaku/tambah-masa-berlaku/tambah-masa-berlaku.component';
import { ManajemenKanimComponent } from './dataconfig/manajemen-kanim/manajemen-kanim.component';
import { TambahManajemenKanimComponent } from './dataconfig/manajemen-kanim/tambah-manajemen-kanim/tambah-manajemen-kanim.component';
import { AlasanPembatalanComponent } from './dataconfig/alasan-pembatalan/alasan-pembatalan.component';
import { TambahAlasanPembatalanComponent } from './dataconfig/alasan-pembatalan/tambah-alasan-pembatalan/tambah-alasan-pembatalan.component';
import { PersyaratanPengajuanComponent } from './dataconfig/persyaratan-pengajuan/persyaratan-pengajuan.component';
import { TambahPersyaratanPengajuanComponent } from './dataconfig/persyaratan-pengajuan/tambah-persyaratan-pengajuan/tambah-persyaratan-pengajuan.component';
import { StatusSipilComponent } from './dataconfig/status-sipil/status-sipil.component';
import { TambahStatusSipilComponent } from './dataconfig/status-sipil/tambah-status-sipil/tambah-status-sipil.component';

export const router: Routes = [
    {
        path:'',        
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent,        
    },
    {
        path:'login',
        component:LoginComponent,        
    },
    {
        path:'approval',
        component:ApprovalComponent,        
    },
    {
        path:'approval/approval-detail',
        component:ApprovalDetailComponent,        
    },
    {
        path:'notification',
        component:NotificationComponent,        
    },
    {
        path:'notification/notification-detail',
        component:NotificationDetailComponent,        
    },
    {
        path:'dpri/permohonan',
        component:PermohonanComponent
    },
    {
        path:'dpri/pembayaran',
        component:PembayaranComponent
    },    
    {
        path:'dpri/alokasi',
        component:AlokasiComponent
    },
    {
        path:'dpri/alokasi/alokasi-edit',
        component:AlokasiEditComponent
    },
    {
        path:'dpri/pencetakan',
        component:PencetakanComponent
    },
    {
        path:'dpri/penyerahan',
        component:PenyerahanComponent
    },
    {
        path:'dpri/penyerahan/penyerahan-edit',
        component:PenyerahanEditComponent
    },
    {
        path:'dpri/pembatalan-dpri',
        component:PembatalanDpriComponent
    },
    {
        path:'dataconfig/jp',
        component:JenisPermohonanComponent
    },
    {
        path:'dataconfig/tambahjp',
        component:TambahJenisPermohonanComponent        
    },
    {
        path:'dataconfig/jd',
        component:JenisDokumenComponent        
    },
    {
        path:'dataconfig/tambahjd',
        component:TambahJenisDokumenComponent        
    },
    {
        path:'dataconfig/jdp',
        component:JenisDokumenPerjalananComponent        
    },
    {
        path:'dataconfig/tambahjdp',
        component:TambahJenisDokumenPerjalananComponent        
    },
    {
        path:'dataconfig/adp',
        component:AlasanDokumenPerjalananComponent        
    },
    {
        path:'dataconfig/tambahadp',
        component:TambahAlasanDokumenPerjalananComponent        
    },
    {
        path:'dataconfig/statussipil',
        component:StatusSipilComponent        
    },
    {
        path:'dataconfig/tambahss',
        component:TambahStatusSipilComponent        
    },
    {
        path:'dataconfig/kewarganegaraan',
        component:KewarganegaraanComponent        
    },
    {
        path:'dataconfig/tambahkw',
        component:TambahkwComponent        
    },
    {
        path:'dataconfig/bank',
        component:BankComponent        
    },
    {
        path:'dataconfig/tambahbank',
        component:TambahbankComponent        
    },
    {
        path:'dataconfig/pembatalan',
        component:AlasanPembatalanComponent        
    },
    {
        path:'dataconfig/tambahap',
        component:TambahAlasanPembatalanComponent        
    },
    {
        path:'dataconfig/pp',
        component:PersyaratanPengajuanComponent        
    },
    {
        path:'dataconfig/tambahpp',
        component:TambahPersyaratanPengajuanComponent        
    },
    {
        path:'dataconfig/mb',
        component:MasaBerlakuComponent                
    },
    {
        path:'dataconfig/tambahmb',
        component:TambahMasaBerlakuComponent        
    },
    {
        path:'dataconfig/mk',
        component:ManajemenKanimComponent        
    },
    {
        path:'dataconfig/tambahmk',
        component:TambahManajemenKanimComponent        
    }
        
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);