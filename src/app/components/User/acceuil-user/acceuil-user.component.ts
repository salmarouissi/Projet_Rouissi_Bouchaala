import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-acceuil-user',
  templateUrl: './acceuil-user.component.html',
  styleUrls: ['./acceuil-user.component.css']
})
export class AcceuilUserComponent implements OnInit {
  lesFormations:Formation[]=[];
  lesFormationfiltre :Formation[]=[]
  tab !:any[]


  constructor(private acceuiluService:AcceuiluService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.lesFormations);
    this.acceuiluService.getFormation().subscribe(data=>{
      this.lesFormations=data;
      this.lesFormationfiltre=this.lesFormations
    })

  }

  onInfo(){
    this.router.navigate(['/info']); 
  }

  onDetails(id:number){
    this.router.navigate(['/details/'+id]); 
  }

  onAcceuil(){
    this.router.navigate(['/acceuil'])
  }

  onRecherche(chaine: string) {
    console.log('aaa');
    this.lesFormationfiltre = this.lesFormations.filter((e) =>
      e.nom.toLowerCase().includes(chaine.toLowerCase())
    );
  }

  recherche(nom:any){
    this.acceuiluService.convert(nom).subscribe(data=>{this.tab=data.results
      console.log(this.tab)
    console.log(this.tab[0].authors[0]);
    });
  
  }
}


