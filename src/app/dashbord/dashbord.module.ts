import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubcontentComponent } from './component/subcontent/subcontent.component';
import { LoginformComponent } from './component/loginform/loginform.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';
import { RegisterationComponent } from './pages/dashboard/registeration/registeration.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ShowfacultyComponent } from './pages/showfaculty/showfaculty.component';
import { AchivementsComponent } from './pages/achivements/achivements.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SubcontentComponent,
    LoginformComponent,
    AboutComponent,
    ContactComponent,
    RegisterationComponent,
    PagenotfoundComponent,
    ShowfacultyComponent,
    AchivementsComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MaterialModule,
    
  ]
})
export class DashbordModule { }
