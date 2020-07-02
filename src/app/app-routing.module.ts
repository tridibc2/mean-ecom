import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './client/components/main/main.component';
import { HomeComponent } from './client/components/home/home.component';
import { ErrorPageComponent } from './client/components/error-page/error-page.component';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./client/components/client.module').then(m => m.ClientModule)
      },
        {
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        },
    ]
  },

  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
