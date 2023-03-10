import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {



  constructor(private ele:LoginService){

  }
   scolor:string=''
  bcolor:string=''
  shubham=new FormGroup({
    emailId:new FormControl("",[Validators.required,Validators.email])
  })
  
  pwdGet(){
    this.ele.forgotpwdGet(this.shubham.value.emailId).subscribe((res)=>{
      if(res=="Please enter valid email id"){
        this.bcolor='red'
        this.scolor=' 0 0 13px inset #ff0000c4'
        alert("Please Enter Registered E-Mail")
      }
      else if(res=="We have sent password to your email"){
        this.bcolor='green'
        this.scolor=' 0 0 13px inset rgb(149, 240, 149)'
        alert("Password Sent To Your E-mail")
      }
      
    })

  }
  
}
