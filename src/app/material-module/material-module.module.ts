import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';




const components=[
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule
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
