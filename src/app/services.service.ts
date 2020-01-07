import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  addData(details){
    return this.http.post("http://localhost:3000/addData/add",details);
  }
  getDetail(){
    return this.http.get("http://localhost:3000/addData/get");
  }
}
