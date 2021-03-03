import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListPetComponent } from './show-list-pet/show-list-pet.component';

const routes: Routes = [
  { path: '', component: ShowListPetComponent },
  { path: 'create', loadChildren:() => import('./create-pet/create-pet.module').then(m => m.CreatePetModule),},
  { path: 'update/:id', loadChildren:() => import('./update-pet/update-pet.module').then(m => m.UpdatePetModule), }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
