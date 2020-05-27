import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { PageNotEntreringComponent } from './page-not-entrering/page-not-entrering.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule),
      },
    ]
  },
  {
    path: '**',
    component: PageNotEntreringComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
