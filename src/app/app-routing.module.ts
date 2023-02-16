import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './modules/container/container.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: ContainerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () => import('./modules/currency-converter/currency-converter.module').then(m => m.CurrencyConverterModule)
    },
  ]
},
{ path: '404', component: NotFoundComponent },
{ path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
