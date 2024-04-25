import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './pages/revenue/revenue.component';


@NgModule({
  declarations: [
    RevenueComponent
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule
  ]
})
export class RevenueModule { }
