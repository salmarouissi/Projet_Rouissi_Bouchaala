import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-consulter-ac',
  templateUrl: './consulter-ac.component.html',
  styleUrls: ['./consulter-ac.component.css']
})
export class ConsulterAcComponent implements OnInit {
  lesFormations:Formation[]=[];
  consulterForm!:FormGroup
  lesFormationfiltre :Formation[]=[]


  constructor(private formBuilder:FormBuilder,private acceuiluService:AcceuiluService,private router:Router) { }
  ngOnInit(): void {
    this.afficherFormation();

    this.acceuiluService.getFormation().subscribe(data=>{
      this.lesFormations=data;
      this.lesFormationfiltre=this.lesFormations
      console.log(this.lesFormationfiltre);
      
    })
  }

  afficherFormation(){
    this.acceuiluService.getFormation()
    .subscribe(data => this.lesFormations=data)
  }
  
  onAction(){
    this.router.navigate(['/actionA/action']);
  }

  onAjouterFormation(){
    this.router.navigate(['/actionA/ajoutFormation']);
  }

  onModifierFormation(id:number){
    this.router.navigate(['/actionA/modifierFormation/'+id]);
  }

  onRecherche(chaine: string) {
    this.lesFormationfiltre = this.lesFormations.filter((e) =>
      e.nom.toLowerCase().includes(chaine.toLowerCase())
    );
  }

  deleteFormation(id:number){
    this.acceuiluService.deleteF(id)
    .subscribe(
      data => this.lesFormationfiltre=this.lesFormationfiltre.filter(e=>e.id != id)
    );
    alert("Supression Réussite");
  }


}
