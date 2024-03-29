import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
