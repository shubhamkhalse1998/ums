import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'




const components=[
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule
  
]


@NgModule({

  imports: [
    components
  ],

  exports:[
    components
  ]



})
export class MaterialModuleModule { }
