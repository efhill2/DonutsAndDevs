import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutdetailComponent } from './donutdetail/donutdetail.component';
import { FamouspeopleComponent } from './famouspeople/famouspeople.component';
import { FamouspersondetailComponent } from './famouspersondetail/famouspersondetail.component';

const routes: Routes = [
  {path: 'donuts', component: DonutsComponent},
  {path: 'donutdetail', component: DonutdetailComponent},
  {path: 'famouspeople', component: FamouspeopleComponent},
  {path: 'famouspersondetail', component: FamouspersondetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
