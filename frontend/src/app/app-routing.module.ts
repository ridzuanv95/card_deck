import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './views/card-form/card-form.component';

const routes: Routes = [
  {
    path: '',
    component: CardFormComponent,
    loadChildren: () => import('./views/card-form/card-form.module').then(m => m.CardFormPageModule),
    data: {
      title: 'Card Form Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
