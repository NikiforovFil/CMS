import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [
        LoginComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MDBBootstrapModule.forRoot()
    ]
})
export class AuthModule {
    
 }