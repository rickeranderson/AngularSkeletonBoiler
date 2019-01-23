import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeContainerComponent } from './code-container/code-container.component';

const routes: Routes = [
  {
    path: '',
    component: CodeContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
