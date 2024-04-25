import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordModule } from './dashbord/dashbord.module';
import { HeaderComponent } from './shared1/component/header/header.component';
import { FooterComponent } from './shared1/component/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SharedComponent } from './shared1/pages/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DashbordModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
