import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';

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
    },
    {
      path:'contact',component:ContactComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
