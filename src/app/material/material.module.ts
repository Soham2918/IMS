import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import {MatRadioModule} from '@angular/material/radio';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const matcomp: any[] | Type<any> | ModuleWithProviders<{}>=[
  MatCardModule,
  MatButtonModule,
  MatRadioModule
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    matcomp
  ],
  exports:[
    matcomp
  ]
})
export class MaterialModule { }
