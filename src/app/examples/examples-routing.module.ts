import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesContainerComponent } from './examples-container/examples-container.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
