import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubcontentComponent } from './component/subcontent/subcontent.component';
import { LoginformComponent } from './component/loginform/loginform.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './pages/dashboard/about/about.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SubcontentComponent,
    LoginformComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MaterialModule,
    
  ]
})
export class DashbordModule { }
