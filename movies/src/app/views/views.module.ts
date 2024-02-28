import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
 
  ]
})
export class ViewsModule { }
