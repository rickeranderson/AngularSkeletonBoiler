import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesContainerComponent } from './examples-container/examples-container.component';

@NgModule({
  declarations: [ExamplesContainerComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
