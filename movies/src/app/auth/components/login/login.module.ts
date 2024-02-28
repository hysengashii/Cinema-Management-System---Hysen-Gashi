import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/views/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
