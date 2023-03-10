import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private ele:HttpClient) { }

  // loginPost(body:any){
  //   return this.ele.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
  // }                         


  // forgotpwdGet(){
  //   return this.ele.get(`http://15.206.171.20:9090/forgotPwd/emailId`,{responseType:'text'})
  // }

  // unlockPost(Body:any){
  //   return this.ele.post(`http://15.206.171.20:9090/unlock`,Body,{responseType:'text'})
  // }

  // countryGet(){
  //   return  this.ele.get(`http://15.206.171.20:9090/countries`)
  // }

  // stateGet(countryId:number){
  //   return this.ele.get(`http://15.206.171.20:9090/states/${countryId}`)
  // }

  // cityGet(stateId:number){
  //   return this.ele.get(`http://15.206.171.20:9090/cities/${stateId}`)
  // }

  // emailGet(email:any){
  //   return this.ele.get(`http://15.206.171.20:9090/emailcheck/${email}`,{responseType:'text'})
  // }

  // registerPost(Body:any){
  //   return this.ele.post(`http://15.206.171.20:9090/saveUser`,Body,{responseType:'text'})
  // }


  loginPost(body:any){
    return this.ele.post(`http://localhost:9090/login`,body,{responseType:'text'})
  }

  forgotpwdGet(email:any){
    return this.ele.get(`http://localhost:9090/forgotPwd/${email}`,{responseType:'text'})
    
  }

  unlockPost(body:any){
    return this.ele.post(`http://localhost:9090/unlock`,body,{responseType:'text'})
  }

  countryGet(){
    return this.ele.get(`http://localhost:9090/countries`)
  }

  stateGet(countryId:number){
    return this.ele.get(`http://localhost:9090/states/${countryId}`)
  }
  
  cityGet(stateId:number){
    return this.ele.get(`http://localhost:9090/cities/${stateId}`)

  }

  emailGet(email:any){
    return this.ele.get(`http://localhost:9090/emailcheck/${email}`,{responseType:'text'})
  }

  registerPost(body:any){
    return this.ele.post(`http://localhost:9090/saveUser`,body,{responseType:'text'})
  }

  

}
