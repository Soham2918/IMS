import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';
import { RegisterationComponent } from './pages/dashboard/registeration/registeration.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

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
    },

    {
      path:'register',component:RegisterationComponent
    },
    {
      path:'**',component:PagenotfoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
