import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashbord/pages/dashboard/dashboard.component';
import { DashbordModule } from './dashbord/dashbord.module';

const routes: Routes = [{
   path:'',redirectTo:'dashboard',pathMatch:'full'},
{ path:'dashboard',loadChildren:()=>import('./dashbord/dashbord.module').then(m=>m.DashbordModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
