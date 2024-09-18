import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  newReg = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl(''),    
    password: new FormControl(''),
    work: new FormControl('No'),
    dayShift: new FormControl(false), 
    nightShift: new FormControl(false), 
    resume: new FormControl('')
  })

  constructor(private registers:CommonService) { }

  ngOnInit(): void {
  }
  
  regUser() {
    this.registers.addReg(this.newReg.value).subscribe({
      next: (result) => {
        this.alert = true;
        this.newReg.reset();
        console.log(result, "Registered successfully");
      },
      error: (err) => {
        console.error("Registration failed", err);
      }
    });
  }
  
  closeAlert(){
    this.alert = false;
  }

}
