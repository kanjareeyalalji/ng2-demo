import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from './user';
import { ToasterService } from '../shared/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: User;
  constructor(private loginService: LoginService, private router: Router, private toasterService: ToasterService) {
    this.userData = new User();
  }

  ngOnInit() {
  }

  checkLogin() {
    this.loginService.login(this.userData)
      .then((data: User) => {
        this.loginService.setUserData(data.UserName);
        this.toasterService.showSuccessMessage('Login Successfully.');
        this.router.navigateByUrl('home');
      }).catch(user => {
        this.toasterService.showError('Invalid Credential.');
      });
  }

}
