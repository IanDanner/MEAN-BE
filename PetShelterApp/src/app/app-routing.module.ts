import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: []},  
  { path: 'new', component: PetCreateComponent, children: []},
  { path: ':id', component: PetInfoComponent, children: []},
  { path: ':id/edit', component: PetEditComponent, children: []},  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
