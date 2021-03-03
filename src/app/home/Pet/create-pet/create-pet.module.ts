import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePetRoutingModule } from './create-pet-routing.module';
import { CreatePetComponent } from './create-pet.component';
import { DropdownCategoryComponent } from 'src/app/file-input-component/dropdown-category/dropdown-category.component';
import { DropdownStatusComponent } from 'src/app/file-input-component/dropdown-status/dropdown-status.component';
import { DebounceClickDirective } from '../../directives/debounce-click.directive';
import { InputNameComponent } from 'src/app/file-input-component/input-name/input-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CategoryModule } from 'src/app/file-input-component/dropdown-category/category.module';
import { StatusModule } from 'src/app/file-input-component/dropdown-status/status.module';
import { InputNameModule } from 'src/app/file-input-component/input-name/input-name.module';
import { DebounceClickModule } from '../../directives/debounce-click.module';


@NgModule({
  declarations: [
    CreatePetComponent,
  ],
  imports: [
    CommonModule,
    CreatePetRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    FormsModule,
    CategoryModule,
    StatusModule,
    InputNameModule,
    DebounceClickModule
  ],
  exports: [
     
  ]
})
export class CreatePetModule { }
