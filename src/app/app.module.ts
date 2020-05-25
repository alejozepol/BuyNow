import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


/* index */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Module */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* component */
import { LayoutComponent } from './layout/layout.component';
import { PageNotEntreringComponent } from './page-not-entrering/page-not-entrering.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotEntreringComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
