import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private resto: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    this.resto.getCurrentData(id).subscribe((result) => {
      this.editRestaurant.patchValue({
        name: result['name'],
        address: result['address'],
        email: result['email']
      });
    });
  }

  updateResto() {
    const id = this.router.snapshot.params.id;
    this.resto.updateResto(id, this.editRestaurant.value).subscribe((result) => {
      console.log(result, "data updated successfully!");
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
