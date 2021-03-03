import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { ShowListPetComponent } from './show-list-pet/show-list-pet.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ShowListPetComponent,
    
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
    
  ],
})
export class PetModule { }
