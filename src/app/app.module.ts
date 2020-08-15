import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { InsertComponent } from './insert/insert.component';
import { HeaderComponent } from './header/header.component';
import {TableModule} from 'primeng/table';
import { HideDivComponent } from './hide-div/hide-div.component';
import { ReactiveComponent } from './reactive/reactive.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComponent,
    TableComponent,
    LoginComponent,
    UserlistComponent,
    InsertComponent,
    HeaderComponent,
    HideDivComponent,
    ReactiveComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
