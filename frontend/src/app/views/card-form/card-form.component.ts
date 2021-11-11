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
  status: any;
  distribute_type: any = 1;
  constructor(
    private fb: FormBuilder,
    private card:CardService
  ) { }

  ngOnInit(): void {
    // form validation 
    this.cardForm = this.fb.group({
      num_people: ['', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]],
      distribute_type: [1, [Validators.required, Validators.minLength(1), Validators.pattern("^[1-2]*$")]]
    });
  };

  onSubmit(){
    var num_people = this.cardForm.get("num_people")?.value;

    var input_data = {
      'num_people': num_people,
      'distribute_type': this.distribute_type
    }

    this.card.generateCard(input_data)?.subscribe((res)=>{
      this.data = res
      console.log('result : ', this.data)
    }, (error : any) => {
      // check if error from backend is status 400
      if(error.status == 400){
        alert('Error : ' + error.error.message)
      }else{
        alert('Error 500 : Server Error')
      }
     })

  }

  onChange(event){
    // if change value option
    this.distribute_type = event.target.value
    console.log('type distribute : ', this.distribute_type)
  }

}
