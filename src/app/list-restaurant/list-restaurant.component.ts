import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  alert:boolean= false;
  public collection:any= [];
  totalLength : any;
  page : number = 1;
  constructor(private commonService:CommonService) { }


  ngOnInit() {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  deleteResto(resto){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteResto(resto).subscribe((result)=>{
      console.log("Data is Deleted Successfully !", result)
      this.alert= true;
    })
  }
  closeAlert(){
    this.alert= false;
  }

}