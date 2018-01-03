import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.route';
import { ToasterService, CustomOption } from './shared/toaster.service';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    AboutUsComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomOption }, ToastsManager,
    ToasterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
