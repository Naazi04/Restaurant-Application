import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/resto";
  regURL = "http://localhost:3000/users";
  regliURL = "http://localhost:3000/registers";

  constructor(private _http:HttpClient) { }
  getRestoList(): Observable<any[]>{
    return this._http.get<any[]>(this.URL);
  }
  addResto(data){
    return this._http.post(this.URL, data);
  }
  deleteResto(id){
    return this._http.delete(`${this.URL}/${id}`)
  }
  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`)
  }
  updateResto(id,data){
    return this._http.put(`${this.URL}/${id}`,data)
  }
  createUser(data){
    return this._http.post(this.regURL,data)
  }
  loginUser(email: string, password: string){
    return this._http.post(this.regURL,{
      email: email,
      password: password
    });
  }
  addReg(userData: any): Observable<any> {
    return this._http.post(this.regliURL, userData);
  }
  
  getRegList(){
    return this._http.get(this.regliURL);
  }
}
