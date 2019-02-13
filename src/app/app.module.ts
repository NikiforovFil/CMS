import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { ModalModule } from 'ngx-bootstrap/modal';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { CcAuthService } from './shared/services/ccAuth.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';
import { AuthGuard } from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CcAuthService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
