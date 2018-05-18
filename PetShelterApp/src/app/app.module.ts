import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PetService } from './pet.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetCreateComponent,
    PetInfoComponent,
    PetEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
