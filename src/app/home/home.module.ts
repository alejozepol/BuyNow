import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestProductsComponent } from './components/best-products/best-products.component';


import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    BestProductsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule

  ],
})
export class HomeModule { }
