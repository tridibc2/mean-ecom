import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
/* import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
 */

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: AdminLoginComponent }
    ]
  }
 ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
