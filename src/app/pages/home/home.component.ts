import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPet } from '../../models/pets.interface';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [LayoutComponent,FormsModule,ReactiveFormsModule,ToastModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[  MessageService]
})
export class HomeComponent {
 form:FormGroup

 constructor(
  private fb:FormBuilder,  private messageService: MessageService,
 ){
   this.form = this.fb.group({
    photo: ['', Validators.required,Validators,Validators.minLength(5)], // Campo obrigatório
     name: ['', Validators.required,Validators.minLength(10),Validators.maxLength(42)],
    color: ['', Validators.required,Validators.minLength(5)], // Campo obrigatório
     race: ['', Validators.required,Validators.minLength(10)],
     age: ['', Validators.required],
     sex: ['', Validators.required,Validators.minLength(10),Validators.maxLength(22)],
   })
 }

 showSuccess() {
  this.messageService.add({
    severity: 'success', 
    summary: 'Sucesso!', 
    detail: 'Login feito  com sucesso.' 
  });
}

  showError() {
  this.messageService.add({
    severity: 'error', 
    summary: 'Ops!', 
    detail: 'Algo deu errado' 
  });
}
  onSubmit(){
    if(this.form.valid){
      const formData:Omit<IPet,"id">=this.form.value
     this.showSuccess()
     this.form.reset()

    }else{
      this.showError()
      this.form.markAllAsTouched
    }
  }
  getFormControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
}
