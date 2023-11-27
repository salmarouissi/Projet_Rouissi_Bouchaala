import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Class/admin/admin';
import { AuthService } from 'src/app/Service/auth/auth.service';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMDPComponent implements OnInit{
  ChangerForm!:FormGroup
  admin:Admin[]=[];

  constructor(private router:Router,private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.afficherAdmin();
    this.ChangerForm = this.formBuilder.nonNullable.group(
      {
      ancien:['',Validators.required],
      nouveau:['',[Validators.required,Validators.pattern('[A-Z][a-zA-Z]+[0-9]+$')]],
      nouveauC:['',Validators.required],
      }
    )
  }

  afficherAdmin(){
    this.authService.getAdmin()
    .subscribe(data => 
      this.admin=data
    )
  }

 
  onChanger(){
    const ancienMDP = this.ChangerForm.get('ancien')?.value;
    const nouveauMDP = this.ChangerForm.get('nouveau')?.value;
    const nouveauCMDP = this.ChangerForm.get('nouveauC')?.value;
    const adminCourant = this.admin[0];

    if(adminCourant.password==ancienMDP){
      if(this.ChangerForm.get('nouveau')?.value==this.ChangerForm.get('nouveauC')?.value){
        adminCourant.password=nouveauMDP;
        this.authService.updateAdminPassword(adminCourant.id,adminCourant).subscribe(() => {
          this.router.navigate(['/actionA/action']);
        });;
      }
      else{
        alert("Verifier la confirmation du mot de passe")
      }
    }
    else{
      alert("L'ancien mot de passe est incorrecte")
    }
    
  }

  public get ancien(){
    return this.ChangerForm.get('ancien') ;
  }

  public get nouveau(){
    return this.ChangerForm.get('nouveau') ;
  }

  public get nouveauC(){
    return this.ChangerForm.get('nouveauC') ;
  }

  isValidPattern(){
    return this.nouveau?.errors?.['pattern'];
  }

  onAction(){
    this.router.navigate(['/actionA/action']);
  }
}
