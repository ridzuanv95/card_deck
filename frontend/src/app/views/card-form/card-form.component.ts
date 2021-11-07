import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm: FormGroup;
  data: any;
  constructor(
    private fb: FormBuilder,
    private card:CardService
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      num_people: ['', [Validators.required]]
    });
  };

  onSubmit(){
    var num_people = this.cardForm.get("num_people")?.value;
    console.log('total people : ', num_people)
    this.card.generateCard(num_people)?.subscribe((res)=>{
      this.data = res
      console.log('data dari server : ', this.data)
    })

  }

}
