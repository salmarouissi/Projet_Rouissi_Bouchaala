import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Class/formateur/formateur';
import { Formation } from 'src/app/Class/formation/formation';
import { AcceuiluService } from 'src/app/Service/acceuilUser/acceuilu.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  idFormation!:number;
  form!:Formation;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,private acceuiluService:AcceuiluService) { }
  ngOnInit(): void {
    this.idFormation=this.activatedRoute.snapshot.params['identif']
    this.afficherFormation()
  }

  afficherFormation(){
    this.acceuiluService.getFormationid(this.idFormation).subscribe(data=>this.form=data);
  }


  onInscri(id:number){
    this.router.navigate(['/inscription/'+id]); 
  }
  
  onAcceuilUser()
  { this.router.navigate(['/acceuilUser']); }


}
