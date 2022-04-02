import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppSalarieComponentModule } from 'src/app/component/add-salarie/add-salarie.module';
import { SalariePageComponent } from './salarie.page';

const routes: Routes = [
  {
    path: '',
    component: SalariePageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AppSalarieComponentModule,
  ],

  declarations: [SalariePageComponent],
  providers: [],
})
export class SalariePageModule {}
