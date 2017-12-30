import { Injectable, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';
import { User } from './user';

@Injectable()
export class LoginService {
    isLogin: EventEmitter<any> = new EventEmitter();
    constructor(private router: Router) {
        const flage = this.checkLogin();
        this.isLogin.emit(flage);
    }

    checkLogin(): boolean {
        const loginFlage = localStorage.getItem('userName') !== undefined && localStorage.getItem('userName') !== null;
        this.isLogin.emit(loginFlage);
        return loginFlage;
    }

    login(userData: User) {
        if (userData.UserName === 'admin' && userData.Password === 'admin') {
            localStorage.setItem('userName', userData.UserName);
            this.isLogin.emit(true);
            return new Promise((resolve, reject) => {
                resolve(userData);
            });
        }
        return new Promise((resolve, reject) => {
            reject(userData);
        });
    }

    logOut() {
        localStorage.removeItem('userName');
        this.isLogin.emit(false);
        this.router.navigateByUrl('login');
    }

    setUserData(userName: string): void {
        localStorage.setItem('userName', userName);
    }
}