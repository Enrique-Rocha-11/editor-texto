import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {


  public editorDesc: any = new Editor({ inputRules: true, });
  public html: any = '';

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
  ];


  constructor(private formBuilder: UntypedFormBuilder,) {
  }


  public formEditor: UntypedFormGroup = this.formBuilder.group({
    description: ["", [Validators.required, Validators.minLength(5)]],
  });


  copiarHtml(){

    const descripcion = this.formEditor.value.description;

    navigator.clipboard.writeText(descripcion)
      .then(() => {
        document.getElementById("boton")!.innerText = "Copiado";
      })
      .catch(err => {
        document.getElementById("boton")!.innerText = "intentar de nuevo";
      })


      setTimeout(() => {
        document.getElementById("boton")!.innerText = "HTML";
      }, 2000);

  }

  demoHtml(){
    document.getElementById("demo")!.innerHTML =  this.formEditor.value.description;
  }

}
