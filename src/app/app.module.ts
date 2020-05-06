import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
/*import {A11yModule} from '@angular/cdk/a11y';
 import {ClipboardModule} from '@angular/cdk/clipboard'; */
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { materialModule } from "./material.module";

import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule , Actions } from "@ngrx/effects";

import { LoaderService } from './loader.service'

import { AppComponent } from './app.component';

import { CommonTableComponent } from './common-table/common-table.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CommonTableComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    /*  A11yModule,
    ClipboardModule, */
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    materialModule,
    HomeModule,
    LoginModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
