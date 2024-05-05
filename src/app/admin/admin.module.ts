import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { SidebarcompComponent } from './component/sidebarcomp/sidebarcomp.component';
import { MaterialModule } from '../material/material.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { UserComponent } from './pages/user/user.component';
import { FeesComponent } from './pages/fees/fees.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarcompComponent,
    CoursesComponent,
    UserComponent,
    FeesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
