import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm!:FormGroup
  lesformations!: Formation;
  idFormation!:number;


  constructor(private activatedRoute: ActivatedRoute,private router:Router,private formBuilder:FormBuilder,private acceuiluService:AcceuiluService) { }

  ngOnInit(): void {
    this.idFormation=this.activatedRoute.snapshot.params['identif'];
    this.afficherProduits();
    this.inscriptionForm = this.formBuilder.nonNullable.group(
      {
      nomprenom:['',Validators.required],
      mail:['',[Validators.required,Validators.pattern('[a-zA-Z]+[0-9]*[@][a-zA-Z]+[0-9]*[.][a-z]+$')]],
      telephone:['',[Validators.required,Validators.maxLength(8)]],
      }
      )
  }

  afficherProduits() {
    this.acceuiluService.getFormationid(this.idFormation).subscribe((data) => {
      this.lesformations = data;
      console.log('Les Formations:', this.lesformations);
    });
  }

  onSubmitForm(){
    const newPerson = {
      nomprenom: this.inscriptionForm.get('nomprenom')?.value, 
      mail:this.inscriptionForm.get('mail')?.value,
      telephone:this.inscriptionForm.get('telephone')?.value
    };

    this.lesformations.personneInscri?.push(newPerson);

    this.lesformations.nbrParticipant--;

    if(this.lesformations.nbrParticipant==0) {
      this.lesformations.disponible=false;
    }


    this.acceuiluService.updateFormation(this.lesformations).subscribe(() => {
      this.router.navigate(['/acceuilUser']);
    });

    
  }

  onDetails(){
    this.router.navigate(['/details/'+this.idFormation]); 
  }

  public get nomprenom(){
    return this.inscriptionForm.get('nomprenom') ;
  }

  public get mail(){
    return this.inscriptionForm.get('mail') ;
  }

  public get telephone(){
    return this.inscriptionForm.get('telephone') ;
  }

  isValidPattern(){
    return this.mail?.errors?.['pattern'];
  }



}
