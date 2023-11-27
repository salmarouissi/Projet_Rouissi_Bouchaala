import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Class/formateur/formateur';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-modifierformation',
  templateUrl: './modifierformation.component.html',
  styleUrls: ['./modifierformation.component.css']
})
export class ModifierformationComponent {
    lesFormateurs :Formateur[]=[]
    ModifierFormation!:FormGroup
  
    lesFormations:Formation[]=[];
    idform!:number;
    formation!:Formation;
  
    constructor(private activatedRoute:ActivatedRoute,private router:Router,private acceuiluService:AcceuiluService,private formBuilder:FormBuilder) { }

    ngOnInit(): void {
      this.afficherlesFormateurs();
      this.idform=this.activatedRoute.snapshot.params['id'];
        console.log("aaaa");
        this.acceuiluService.getFormation().subscribe(
          data => {
            this.lesFormations = data;
            for (let i = 0; i < this.lesFormations.length; i++) {
              if (this.lesFormations[i].id == this.idform) {
                this.formation = this.lesFormations[i];                
                this.ModifierFormation = this.formBuilder.group({
                    id:[this.formation.id],
                    nom:[this.formation.nom,Validators.required],
                    photo:[this.formation.photo,[Validators.required,Validators.pattern('^assets/images/[a-zA-Z]+[.][a-zA-Z]+')]],
                    prix: [this.formation.prix,Validators.required],
                    dateF:[this.formation.dateF,Validators.required],
                    heure:[this.formation.heure,Validators.required],
                    duree:[this.formation.duree,Validators.required],
                    lieux:[this.formation.lieux,Validators.required],
                    nbrParticipant:[this.formation.nbrParticipant,Validators.required],
                    description:[this.formation.description,Validators.required],
                    format:[this.formation.format],
                });
                break;
              }
            }
          }
        );
    }
  
  
    afficherlesFormateurs(){    
      this.acceuiluService.getFormateur()
      .subscribe ((data) => {this.lesFormateurs = data;})    
    }
  
  
    onAction(){
      this.router.navigate(['/actionA/consulterAc']);
    }
    public get id() {
      return this.ModifierFormation.get('id')
    }
    
    public get nom(){
      return this.ModifierFormation.get('nom') ;
    }

    public get photo(){
      return this.ModifierFormation.get('photo') ;
    }
  
    public get prix(){
      return this.ModifierFormation.get('prix') ;
    }
  
    public get dateF(){
      return this.ModifierFormation.get('dateF') ;
    }
  
    public get heure(){
      return this.ModifierFormation.get('heure') ;
    }
  
    public get duree(){
      return this.ModifierFormation.get('duree') ;
    }
  
    public get lieux(){
      return this.ModifierFormation.get('lieux') ;
    }
  
    public get nbrParticipant(){
      return this.ModifierFormation.get('nbrParticipant') ;
    }
  
    public get description(){
      return this.ModifierFormation.get('description') ;
    }
  
  
    public get disponible(){
      return this.ModifierFormation.get('disponible') ;
    }
    
    public get format(){
      return this.ModifierFormation.get('format') ;
    }

    isValidPatternPhoto(){
      return this.photo?.errors?.['pattern'];
    }

    onModifierFormation() {
      this.formation.id=this.id?.value
      this.formation.nom=this.nom?.value
      this.formation.photo=this.photo?.value
      this.formation.prix=this.prix?.value
      this.formation.dateF=this.dateF?.value
      this.formation.heure=this.heure?.value
      this.formation.duree=this.duree?.value
      this.formation.lieux=this.lieux?.value
      this.formation.nbrParticipant=this.nbrParticipant?.value
      this.formation.description=this.description?.value
      if(this.nbrParticipant?.value != 0){
        this.formation.disponible=true
      }
      else{
        this.formation.disponible=false
      }
      this.formation.format=this.format?.value


      this.acceuiluService.updateFormation(this.formation).subscribe(
        data=>{
          for(let i=0;i<this.lesFormateurs.length;i++){
            if(this.lesFormations[i].id==this.idform) {
            this.lesFormations[i]=this.formation;}
            this.router.navigate(['/actionA/consulterAc']);
          }
        }
      )
    }
  

}
