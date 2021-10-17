import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.scss']
})
export class LandingFormComponent implements OnInit {

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {

        this.form = new FormGroup({
        fio:new FormControl(null,[Validators.required]),
        phone:new FormControl(null,[Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        country:new FormControl(null,[Validators.required]),
        city:new FormControl(null,[Validators.required]),
        message: new FormControl(null, []),
      })
  }
  submit(){

  }




}
