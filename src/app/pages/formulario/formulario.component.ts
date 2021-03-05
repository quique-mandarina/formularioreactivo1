import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title = 'Ejemplo de Formulario reactivo por Quique Vera';
  solicitudForm: FormGroup;


  constructor(private fb: FormBuilder,
              private modal1: NgbModal) {

  }

  ngOnInit(): void {
    this.solicitudForm = this.fb.group({
        reembolso: [0],
        solicitud:this.fb.array([])
    });
  }

  openModalLg(content) {
    this.modal1.open(content, { size: 'xl' });
  }

  newFormulario() {
   return this.fb.group({
      id: [null],
      factura: ['fac-00'],
      documento: ['docmento-0'],
      subtotal: [0.00],
      iva: [0.00],
      desglose: this.fb.array([])
    })
  }

  addNewFormulario() {
    const control = <FormArray>this.solicitudForm.controls['solicitud'];
    control.push(this.newFormulario())
  }

  solicitud(): FormArray {
    return this.solicitudForm.get('solicitud') as FormArray;
  }

  removerSolicitud(position) {
    this.solicitud().removeAt(position)
  }

  newDesglose() {
    return this.fb.group({
      subtotal: [0.00],
      centroCosto: ['centro-1'],
      descripcion: ['des 1']
    })
  }

  desglose(pos): FormArray {
    return this.solicitud().controls[pos].get('desglose') as FormArray;
  }

  removerDesglose(positionactual, positiondelete) {
    this.desglose(positionactual).removeAt(positiondelete);
  }

  addNewDesglose(row) {
    const control = (<FormArray>this.solicitudForm.controls['solicitud']).at(row).get('desglose') as FormArray;
    control.push(this.newDesglose());
  }





}
