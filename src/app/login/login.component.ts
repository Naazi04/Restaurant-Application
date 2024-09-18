import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email : string;
  password : string;

  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email == "admin@gmail.com" && this.password == "Admin@123"){
      this.router.navigate(["../reg-list"]);
    }
    else if(this.email == null || this.password == null){
      alert("Please enter all details");
    }
      else {
        alert("Please enter valid details");
    }
  }
}
