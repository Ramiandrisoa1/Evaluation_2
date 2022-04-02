import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppSalarieComponent } from './add-salarie.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AppSalarieComponent],
  exports: [AppSalarieComponent],
  providers: [FormGroupDirective],
})
export class AppSalarieComponentModule {}
