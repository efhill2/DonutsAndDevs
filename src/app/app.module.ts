import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutdetailComponent } from './donutdetail/donutdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FamouspeopleComponent } from './famouspeople/famouspeople.component';
import { FamouspersondetailComponent } from './famouspersondetail/famouspersondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutdetailComponent,
    FamouspeopleComponent,
    FamouspersondetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
