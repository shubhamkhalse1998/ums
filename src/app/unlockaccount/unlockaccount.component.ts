import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-unlockaccount',
  templateUrl: './unlockaccount.component.html',
  styleUrls: ['./unlockaccount.component.css']
})
export class UnlockaccountComponent {
constructor(private ele:LoginService){}
body:any
bcolor:string='';
scolor:string='';
unlockAcc=new FormGroup({
  newPwd:new FormControl("",[Validators.required]),
  tempPwd:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email]),
  confirmPwd:new FormControl("",[Validators.required]),
})
unlock(){
  this.ele.unlockPost(this.unlockAcc.value).subscribe((res)=>{
    if(res=="Account unlocked successfully"){
      this.bcolor='green'
      this.scolor=' 0 0 13px inset rgb(149, 240, 149)'
      alert(res)
    }
    else if(res=="Incorrect Temporary Password"){
      this.bcolor='red'
        this.scolor=' 0 0 13px inset #ff0000c4'
        alert(res)
    }
  })

}
}
