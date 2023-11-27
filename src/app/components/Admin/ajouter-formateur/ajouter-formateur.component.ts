import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Class/formateur/formateur';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  ajoutFormateurForm!:FormGroup
  
  constructor(private router:Router,private formBuilder:FormBuilder,private acceuiluService:AcceuiluService) { }


  ngOnInit(): void {    
    this.ajoutFormateurForm = this.formBuilder.nonNullable.group(
      {
      id:[,Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      typeformation:['',Validators.required],
      genre:['',Validators.required]
      }
    )
  }

  onSubmitForm(){
    console.log(this.ajoutFormateurForm.get('id')?.value);
    console.log(this.ajoutFormateurForm.get('nom')?.value);
    console.log(this.ajoutFormateurForm.get('prenom')?.value);
    console.log(this.ajoutFormateurForm.get('typeformation')?.value);
    console.log(this.ajoutFormateurForm.get('genre')?.value);

    
    const formateurData = this.ajoutFormateurForm.value as Formateur;
    this.acceuiluService.addFormateur(formateurData).subscribe(() => {
      this.router.navigate(['/actionA/action']);
    });
  }

  onAction(){
    this.router.navigate(['/actionA/action']);
  }

  public get nom(){
    return this.ajoutFormateurForm.get('nom') ;
  }

  public get prenom(){
    return this.ajoutFormateurForm.get('prenom') ;
  }

  public get typeformation(){
    return this.ajoutFormateurForm.get('typeformation') ;
  }

  public get genre(){
    return this.ajoutFormateurForm.get('genre') ;
  }

}
