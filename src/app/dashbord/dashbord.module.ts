import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubcontentComponent } from './component/subcontent/subcontent.component';
import { LoginformComponent } from './component/loginform/loginform.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SubcontentComponent,
    LoginformComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MaterialModule,
    
  ]
})
export class DashbordModule { }
