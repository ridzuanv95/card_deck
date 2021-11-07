import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardFormComponent } from './card-form.component';

const routes: Routes = [
  {
    path: '',
    component: CardFormComponent,
    data: {
      title: 'cardForm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardFormRoutingModule {}