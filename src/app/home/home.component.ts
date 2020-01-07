import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}
// const elementData:PeriodicElement[]=[
//   {firstName:"AKHIL",lastName:"RAJ",email:"mailidhhHere",address:"amballappad"},
//   {firstName:"arjun",lastName:"manu",email:"itsnot a mail",address:"it may be working"}];
var elementData:PeriodicElement[]=[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns:string[]=['firstName','lastName','email','address'];
// dataSource:string[];
  // elementData:string[];
  dataSource=null;
  constructor(private router:Router,
            private servicesService:ServicesService) { }

  ngOnInit() {
    this.servicesService.getDetail()
    .subscribe((data)=>{
    
      const elementData:Array<PeriodicElement>=JSON.parse(JSON.stringify(data));
      
      console.log("getting data",elementData);
      console.log("getting second",data);
      this.dataSource = new MatTableDataSource(elementData);
      console.log(this.dataSource);
      
      
    });
  }
  applyFilter(filterValue: string) {
    console.log("im present");
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
