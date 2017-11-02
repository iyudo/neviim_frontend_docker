import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {JpComponent} from './dataconfig/jp/jp.component';
import {JdComponent} from './dataconfig/jd/jd.component';
import {JdpComponent} from './dataconfig/jdp/jdp.component';
import { AdpComponent } from './dataconfig/adp/adp.component';
import { StatussipilComponent } from './dataconfig/statussipil/statussipil.component';
import { KewarganegaraanComponent } from './dataconfig/kewarganegaraan/kewarganegaraan.component';
import { BankComponent } from './dataconfig/bank/bank.component';
import { PembatalanComponent } from './dataconfig/pembatalan/pembatalan.component';
import { PpComponent } from './dataconfig/pp/pp.component';
import { MbComponent } from './dataconfig/mb/mb.component';
import { MkComponent } from './dataconfig/mk/mk.component';
import { TambahjpComponent } from './dataconfig/jp/tambahjp/tambahjp.component';
import { TambahjdComponent } from './dataconfig/jd/tambahjd/tambahjd.component';
import { TambahjdpComponent } from './dataconfig/jdp/tambahjdp/tambahjdp.component';
import { TambahadpComponent } from './dataconfig/adp/tambahadp/tambahadp.component';
import { TambahssComponent } from './dataconfig/statussipil/tambahss/tambahss.component';
import { TambahkwComponent } from './dataconfig/kewarganegaraan/tambahkw/tambahkw.component';
import { TambahbankComponent } from './dataconfig/bank/tambahbank/tambahbank.component';
import { TambahapComponent } from './dataconfig/pembatalan/tambahap/tambahap.component';
import { TambahppComponent } from './dataconfig/pp/tambahpp/tambahpp.component';
import { TambahmbComponent } from './dataconfig/mb/tambahmb/tambahmb.component';
import { TambahmkComponent } from './dataconfig/mk/tambahmk/tambahmk.component';
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
        component:JpComponent
    },
    {
        path:'dataconfig/tambahjp',
        component:TambahjpComponent        
    },
    {
        path:'dataconfig/jd',
        component:JdComponent        
    },
    {
        path:'dataconfig/tambahjd',
        component:TambahjdComponent        
    },
    {
        path:'dataconfig/jdp',
        component:JdpComponent        
    },
    {
        path:'dataconfig/tambahjdp',
        component:TambahjdpComponent        
    },
    {
        path:'dataconfig/adp',
        component:AdpComponent        
    },
    {
        path:'dataconfig/tambahadp',
        component:TambahadpComponent        
    },
    {
        path:'dataconfig/statussipil',
        component:StatussipilComponent        
    },
    {
        path:'dataconfig/tambahss',
        component:TambahssComponent        
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
        component:PembatalanComponent        
    },
    {
        path:'dataconfig/tambahap',
        component:TambahapComponent        
    },
    {
        path:'dataconfig/pp',
        component:PpComponent        
    },
    {
        path:'dataconfig/tambahpp',
        component:TambahppComponent        
    },
    {
        path:'dataconfig/mb',
        component:MbComponent                
    },
    {
        path:'dataconfig/tambahmb',
        component:TambahmbComponent        
    },
    {
        path:'dataconfig/mk',
        component:MkComponent        
    },
    {
        path:'dataconfig/tambahmk',
        component:TambahmkComponent        
    }
        
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);