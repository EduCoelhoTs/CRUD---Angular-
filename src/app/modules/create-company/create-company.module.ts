import { DirectivesModule } from './../../shared/directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCompanyRoutingModule } from './create-company-routing.module';
import { CreateCompanyComponent } from './create-company.component';
import { DirectivesModule } from 'src/app/shared/common/directives/directives.module';


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
