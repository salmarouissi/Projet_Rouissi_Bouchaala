import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/Admin/login/login.component';
import { ActionAdminComponent } from './components/Admin/action-admin/action-admin.component';
import { AjouterFormateurComponent } from './components/Admin/ajouter-formateur/ajouter-formateur.component';
import { AjouterFormationComponent } from './components/Admin/ajouter-formation/ajouter-formation.component';
import { ChangerMDPComponent } from './components/Admin/changer-mdp/changer-mdp.component';
import { ConsulterAcComponent } from './components/Admin/consulter-ac/consulter-ac.component';
import { AcceuilUserComponent } from './components/User/acceuil-user/acceuil-user.component';
import { DetailsComponent } from './components/User/details/details.component';
import { InscriptionComponent } from './components/User/inscription/inscription.component';
import { authGuard } from './Guard/auth.guard';
import { InfoComponent } from './components/User/info/info.component';
import { ContenairComponent } from './components/Admin/contenair/contenair/contenair.component';
import { ModifierformationComponent } from './components/Admin/modifierformation/modifierformation.component';

const routes: Routes = [
  {path:'acceuil', title:'Accueil', component:AcceuilComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'login', title:'Login', component:LoginComponent },
  {path:'actionA', title:'Action', component:ContenairComponent,canActivate:[authGuard],
    children:[
      {path:'action', title:'Action Admin', component:ActionAdminComponent},
      {path:'', redirectTo:'/actionA/action', pathMatch:'full'},
      {path:'consulterAc', title:'Consulter Activite', component:ConsulterAcComponent},
      {path:'ajoutFormation', title:'Ajouter Formation', component:AjouterFormationComponent},
      {path:'modifierFormation/:id', title:'Modifier Formation', component:ModifierformationComponent},
      {path:'changerMDP', title:'Changer mot de passe', component:ChangerMDPComponent},
      {path:'ajoutFormateur', title:'Ajouter Formateur', component:AjouterFormateurComponent},    
    ]
  },
  {path:'acceuilUser', title:'Acceui User', component:AcceuilUserComponent},
  {path:'info', title:'Info', component:InfoComponent},
  {path:'details/:identif', title:'Details', component:DetailsComponent},
  {path:'inscription/:identif', title:'Inscription', component:InscriptionComponent},
  {path:'**', title:'Erreur', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
