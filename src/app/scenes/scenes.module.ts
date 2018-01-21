import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ScenesModule { }
