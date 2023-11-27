import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private router:Router) { }

  onAcceuilUser()
  { this.router.navigate(['/acceuilUser']); }

}
