import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  userx: User = new User;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userx)
  }

}
