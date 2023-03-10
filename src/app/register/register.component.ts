
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  
  constructor(private http : LoginService){
    this.getCountryList()
    
    
  }
  bordercolor:string='';
  textcolor:string='';
  
  

  body:any;
  stateName:any;
  cityName:any;
  shubham=new FormGroup({
    "fname":new FormControl("",[Validators.required]),
    "lname":new FormControl("",[Validators.required]),
    "dob":new FormControl("",[Validators.required]),
    "gender":new FormControl("",[Validators.required]),
    "email":new FormControl("",[Validators.required,Validators.email]),
    "stateId":new FormControl("",[Validators.required]),
    "countryId":new FormControl("",[Validators.required]),
    "cityId":new FormControl("",[Validators.required]),
    "phno":new FormControl("",[Validators.required]),
  })
  
  getCountryList(){
    this.http.countryGet().subscribe((res:any)=>this.body=res)
    
  }

    getStatesList(countryId:number){
    this.http.stateGet(countryId).subscribe((res)=>this.stateName=res)
}

  getCityList(stateId:number){
    this.http.cityGet(stateId).subscribe((res)=>this.cityName=res)
  }

  emailCheck(email:any){
    this.http.emailGet(email).subscribe((res)=>{
      if(res=="UNIQUE"){
        this.bordercolor='green';
        this.textcolor='green'
        // console.log('unique')
        
      }
      else if(res=="DUPLICATE"){
        this.bordercolor='red';
        this.textcolor='red'
        // console.log('duplicate')
        alert("E-Mail Already Used")
      }
    })
  }
  
  register(){
    this.http.registerPost(this.shubham.value).subscribe((res)=>alert(res))
  
}
}