import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeContainerComponent } from './code-container/code-container.component';

@NgModule({
  declarations: [CodeContainerComponent],
  imports: [
    CommonModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
