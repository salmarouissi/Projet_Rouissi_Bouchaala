import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  constructor(private router:Router,private authService:AuthService){}

  onDisconnect(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
