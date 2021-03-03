import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownCategoryComponent } from 'src/app/file-input-component/dropdown-category/dropdown-category.component';
import { PetService } from 'src/app/service/APi-Pet/pet.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  pet: any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl(''),
    category: {
      id: new FormControl('', [Validators.required]),
    },
    tags: new FormControl('', [Validators.required]),
    status: new FormControl(''),
    photoUrls: new FormControl(''),
  });
  listCategory: any =[];
  listTag: any = [];
  listCheckTag: any = [];
  booleanTag : Boolean= false;
  statusValidation: 'available' | 'pending' | 'sold';
  listPhotoUrls: any = [];
  isValidateTag= false;
  isValidatedCategory = false;
  parentDataName: false;
  dataCategory: "";

  @ViewChild(DropdownCategoryComponent) dataCategoryComponent :DropdownCategoryComponent;
  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService, private petService: PetService) { }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
  }


  addPet(){
    this.listPhotoUrls.push(this.pet.value.photoUrls);
    this.pet.value.photoUrls=[];
    debugger;
    if(this.dataCategoryComponent.categories == undefined){
      this.isValidatedCategory = true;
      return;
    }
    this.dataCategory = this.dataCategoryComponent.categories;
    if(this.listCheckTag.length === 0){
      this.isValidateTag = true;
      return;
    }
    this.pet.controls['category'].setValue(this.dataCategory);
    this.pet.controls['id'].setValue(Math.floor(Math.random() * (10000 - 1 + 1)) + 1);
    this.pet.value.photoUrls = this.listPhotoUrls;
    this.listCheckTag = [];
    this.listPhotoUrls= [];
    this.petService.addPet(this.pet.value)
      .then(res => {
        this.pet.reset();
        this.router.navigateByUrl("/pets");
        })
      .catch(e => {
        this.pet.reset();
        window.alert('Connection Error!'); })
  }
  back(){
    this.pet.reset();
    this.router.navigateByUrl('/pets');
  }

  
  changeSelection(i){
    for (let checktag of this.listCheckTag) {
      if(checktag === this.listTag[i]){
        this.booleanTag = true;
      }
    }
    if(this.booleanTag){
      this.listCheckTag = this.listCheckTag.filter(tags => tags !== this.listTag[i]);
      this.booleanTag = false;
    }else{
      this.listCheckTag.push(this.listTag[i]);
    }
    if(this.listCheckTag.length === 0){
      this.isValidateTag = true;
    }else{
      this.isValidateTag = false;
    }
    this.pet.controls['tags'].setValue(this.listCheckTag);
  }
  
  checkCategory(){
    if(this.dataCategoryComponent.categories){
      this.isValidatedCategory = true;
    }else{
      this.isValidatedCategory = false;
    }
  }
}
