import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
