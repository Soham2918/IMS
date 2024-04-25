import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/dashboard/about/about.component';

const routes: Routes = [
  {
  path:'',redirectTo:'dashboardcomp',pathMatch:'full'
  }
  ,
  {
    path:'dashboardcomp',component:DashboardComponent,
  },
    {
      path:'about',component:AboutComponent,
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
