import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { UserComponent } from './pages/user/user.component';
import { FeesComponent } from './pages/fees/fees.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'admincomp', pathMatch: 'full'
  }
  ,
  {
    path: 'admincomp', component: AdminComponent,
    children: [

      {
        path: 'courses', component: CoursesComponent,
      },
      {
        path:'user',component:UserComponent,
      },
      {
        path:'fees',component:FeesComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
