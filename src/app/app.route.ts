import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
// Route Configuration
export const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
    }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'about',
        component: AboutUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }