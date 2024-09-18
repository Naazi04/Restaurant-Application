import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  alert:boolean= false;
  public collection:any= [];
  constructor(private registers:CommonService) { }

  ngOnInit(): void {    
    this.registers.getRegList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }

}
