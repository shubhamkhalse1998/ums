import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private ele:LoginService){}
bcolor:string='';
scolor:string='';
login=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  pwd:new FormControl("",Validators.required)
})
post(){
  this.ele.loginPost(this.login.value).subscribe((res)=>{
    if(res=="Invalid Credentials"){
      this.bcolor='red'
        this.scolor=' 0 0 13px inset #ff0000c4'
        alert("E-Mail Not Found Please Register")
    }
    else if(res=="SUCCESS"){
      this.bcolor='green'
        this.scolor=' 0 0 13px inset rgb(149, 240, 149)'
        alert("Login Successfully")
    }
  })
  
}

}
