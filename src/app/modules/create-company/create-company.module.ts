import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCompanyRoutingModule } from './create-company-routing.module';
import { CreateCompanyComponent } from './create-company.component';


@NgModule({
  declarations: [
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    CreateCompanyRoutingModule
  ]
})
export class CreateCompanyModule { }
