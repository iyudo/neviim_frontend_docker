import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule, MatNativeDateModule, MatExpansionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { JpComponent } from './dataconfig/jp/jp.component';
import { JdpComponent } from './dataconfig/jdp/jdp.component';
import { JdComponent } from './dataconfig/jd/jd.component';
import { AdpComponent } from './dataconfig/adp/adp.component';
import { StatussipilComponent } from './dataconfig/statussipil/statussipil.component';
import { KewarganegaraanComponent } from './dataconfig/kewarganegaraan/kewarganegaraan.component';
import { BankComponent } from './dataconfig/bank/bank.component';
import { PembatalanComponent } from './dataconfig/pembatalan/pembatalan.component';
import { PpComponent } from './dataconfig/pp/pp.component';
import { MbComponent } from './dataconfig/mb/mb.component';
import { MkComponent } from './dataconfig/mk/mk.component';
import { MpppComponent } from './dataconfig/mppp/mppp.component';
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
import {FormsModule} from '@angular/forms';
import { PermohonanComponent } from './dpri/permohonan/permohonan.component';
import { PembayaranComponent } from './dpri/pembayaran/pembayaran.component';
import { AlokasiComponent } from './dpri/alokasi/alokasi.component';
import { AlokasiEditComponent } from './dpri/alokasi/alokasi-edit/alokasi-edit.component';
import { PencetakanComponent } from './dpri/pencetakan/pencetakan.component';
import { PenyerahanComponent } from './dpri/penyerahan/penyerahan.component';
import { PenyerahanEditComponent } from './dpri/penyerahan/penyerahan-edit/penyerahan-edit.component';
import { PembatalanDpriComponent } from './dpri/pembatalan-dpri/pembatalan-dpri.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    JpComponent,
    JdpComponent,
    JdComponent,
    AdpComponent,
    StatussipilComponent,
    KewarganegaraanComponent,
    BankComponent,
    PembatalanComponent,
    PpComponent,
    MbComponent,
    MkComponent,
    MpppComponent,
    TambahjpComponent,
    TambahjdComponent,
    TambahjdpComponent,
    TambahadpComponent,
    TambahssComponent,
    TambahkwComponent,
    TambahbankComponent,
    TambahapComponent,
    TambahppComponent,
    TambahmbComponent,
    TambahmkComponent,
    ApprovalComponent,
    ApprovalDetailComponent,
    NotificationComponent,
    NotificationDetailComponent,
    PermohonanComponent,
    PembayaranComponent,
    AlokasiComponent,
    AlokasiEditComponent,
    PencetakanComponent,
    PenyerahanComponent,
    PenyerahanEditComponent,
    PembatalanDpriComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,     
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
