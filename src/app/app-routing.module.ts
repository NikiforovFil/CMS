import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { SystemComponent } from './system/system.component';


const routes: Routes = [
  { path: '', redirectTo: 'system/statistics', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  // { path: 'system', loadChildren: './system/system.module#SystemModule'},
  { path: 'system', component: SystemComponent },
  { path: '404', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }