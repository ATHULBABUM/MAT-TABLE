import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  submit(){
    alert("clicked");
    this.router.navigateByUrl('home')
  }
}

