import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Class/formateur/formateur';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit{
  lesFormateurs :Formateur[]=[]
  AjouterFormation!:FormGroup

  


  ngOnInit(): void {
    this.afficherlesFormateurs();
    this.AjouterFormation = this.formBuilder.nonNullable.group(
      {
      id:[''],
      nom:['',Validators.required],
      photo:['assets/images/former.jpg',[Validators.required,Validators.pattern('^assets/images/[a-zA-Z]+[.][a-zA-Z]+')]],
      prix:[0,Validators.required],
      dateF:['',Validators.required],
      heure:['',Validators.required],
      duree:[0,Validators.required],
      lieux:['',Validators.required],
      nbrParticipant:[0,Validators.required],
      description:['',Validators.required],
      format:['Select Formateur'],
      }
    )
  }

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private acceuiluService:AcceuiluService,private formBuilder:FormBuilder) { }

  afficherlesFormateurs(){    
    this.acceuiluService.getFormateur()
    .subscribe ((data) => {this.lesFormateurs = data;})    
  }

  onAjouterFormation(){
    const formationData = this.AjouterFormation.value as Formation;
    const formateurSelectionne = this.AjouterFormation.get('format')?.value as Formateur;
    formationData.format = `${formateurSelectionne.nom} ${formateurSelectionne.prenom}`;
    formationData.personneInscri = [];
    if(this.nbrParticipant?.value != 0){
      formationData.disponible=true
    }
    else{
      formationData.disponible=false
    }
    this.acceuiluService.addFormation(formationData).subscribe(() => {
      alert('ajout de formation reussit');
      this.router.navigate(['/actionA/consulterAc']);
    });
    
  }

  onAction(){
    this.router.navigate(['/actionA/action']);
  }
  
  public get nom(){
    return this.AjouterFormation.get('nom') ;
  }

  public get photo(){
    return this.AjouterFormation.get('photo') ;
  }

  public get prix(){
    return this.AjouterFormation.get('prix') ;
  }

  public get dateF(){
    return this.AjouterFormation.get('dateF') ;
  }

  public get heure(){
    return this.AjouterFormation.get('heure') ;
  }

  public get duree(){
    return this.AjouterFormation.get('duree') ;
  }

  public get lieux(){
    return this.AjouterFormation.get('lieux') ;
  }

  public get nbrParticipant(){
    return this.AjouterFormation.get('nbrParticipant') ;
  }

  public get description(){
    return this.AjouterFormation.get('description') ;
  }


  public get disponible(){
    return this.AjouterFormation.get('disponible') ;
  }

  isValidPatternPhoto(){
    return this.photo?.errors?.['pattern'];
  }

}
