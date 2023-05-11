import { DirectivesModule } from './../../shared/directives/directives.module';
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
    CreateCompanyRoutingModule,
    DirectivesModule
  ]
})
export class CreateCompanyModule { }
