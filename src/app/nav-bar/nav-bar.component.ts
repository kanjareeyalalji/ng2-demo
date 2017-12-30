import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isNavVisible = false;
  constructor(private loginService: LoginService) {
    this.loginService.isLogin.subscribe((flage: boolean) => {
      this.isNavVisible = flage;
    });
  }

  ngOnInit() {
    this.isNavVisible = this.loginService.checkLogin();
  }
  logout() {
    this.loginService.logOut();
  }
}
