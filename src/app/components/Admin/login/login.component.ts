import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Class/admin/admin';
import { AuthService } from 'src/app/Service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  admin:Admin[]=[];

  constructor(private router:Router, private authService:AuthService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    localStorage.setItem("etat","disconnected")
    this.afficherAdmin();
    this.loginForm = this.formBuilder.nonNullable.group(
      {
      username:['',Validators.required],
      password:['',Validators.required],
      }
    )
  }

  onAcceuil(){
    this.router.navigate(['/acceuil'])
  }

  afficherAdmin(){
    this.authService.getAdmin()
    .subscribe(data => 
      this.admin=data
    )
  }

  onAuthentif(){
    if(this.authService.login(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value,this.admin[0].username,this.admin[0].password)){
      this.router.navigate(['/actionA'])
    }
    else{
      alert("Incorrect Informations")
    }
  }

  public get username(){
    return this.loginForm.get('username') ;
  }

  public get password(){
    return this.loginForm.get('password') ;
  }
}
