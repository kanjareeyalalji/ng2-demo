import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastsManager, vRef: ViewContainerRef, private router: Router, private loginService: LoginService) {
    this.toastr.setRootViewContainerRef(vRef);
    this.router.events.subscribe((event: any) => {
      if (event.constructor.name === 'NavigationStart') {
        if (event.url !== '/login' && !this.loginService.checkLogin()) {
          this.router.navigateByUrl('login');
        }
      }
    });
  }
}
