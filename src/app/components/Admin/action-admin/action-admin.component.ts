import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Class/formateur/formateur';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-action-admin',
  templateUrl: './action-admin.component.html',
  styleUrls: ['./action-admin.component.css']
})
export class ActionAdminComponent implements OnInit{
  lesFormateurs:Formateur[]=[];
  lesFormations :Formation[]=[]
  lesFormationfiltre :Formation[]=[]

  
  constructor(private acceuiluService:AcceuiluService,private router:Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.afficherFormateur();
    console.log(this.lesFormations);
    this.acceuiluService.getFormation().subscribe(data=>{
      this.lesFormations=data;
      this.lesFormationfiltre=this.lesFormations
    })
  }


  afficherFormateur(){
    this.acceuiluService.getFormateur()
    .subscribe(data => this.lesFormateurs=data)
  }

  onRecherche(chaine:string) {
    this.lesFormationfiltre=this.lesFormations.filter((e)=>
      e.nom.toLowerCase().includes(chaine.toLocaleLowerCase()
    ))
  }

  onConsulter()
  { this.router.navigate(['/actionA/consulterAc']); }

  onAjouterformation()
    { this.router.navigate(['/actionA/ajoutFormation']); }

  onChangerMDP()
  { this.router.navigate(['/actionA/changerMDP']); }
  
  onajoutFormateur()
  { this.router.navigate(['/actionA/ajoutFormateur']); }
}
