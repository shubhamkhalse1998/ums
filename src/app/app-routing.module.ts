import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UnlockaccountComponent } from './unlockaccount/unlockaccount.component';

const routes: Routes = [
  {
    path:'Home',component:HomeComponent
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Unlock',component:UnlockaccountComponent
  },
  {
    path:'unlockAcc',component:UnlockaccountComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Logout',component:LogoutComponent
  },
  {
    path:'ForgetPassword',component:ForgetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
