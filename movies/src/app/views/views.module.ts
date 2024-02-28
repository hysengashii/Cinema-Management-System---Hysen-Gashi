import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ViewsModule { }
