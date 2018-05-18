import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  newPet: any;
  errors = [];
  duplicate = {};

  constructor(private route: Router, private petservice: PetService) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: "", likes: 0};
  }

  onCreate(){
    this.errors = [];
    let observable = this.petservice.newPet(this.newPet);
    observable.subscribe(
      (data) => {
        if(data["errors"]){           
          this.errors = data["errors"];
        }
        if(data["errmsg"]){
          this.duplicate = data;
        }
        else{
          this.route.navigateByUrl('/');
        }
    })
  }
}
