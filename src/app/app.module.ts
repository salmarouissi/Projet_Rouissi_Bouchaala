import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './components/Admin/header-admin/header-admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { LoginComponent } from './components/Admin/login/login.component';
import { ActionAdminComponent } from './components/Admin/action-admin/action-admin.component';
import { ConsulterAcComponent } from './components/Admin/consulter-ac/consulter-ac.component';
import { AjouterFormationComponent } from './components/Admin/ajouter-formation/ajouter-formation.component';
import { ChangerMDPComponent } from './components/Admin/changer-mdp/changer-mdp.component';
import { AjouterFormateurComponent } from './components/Admin/ajouter-formateur/ajouter-formateur.component';
import { ErrorComponent } from './components/error/error.component';
import { AcceuilUserComponent } from './components/User/acceuil-user/acceuil-user.component';
import { DetailsComponent } from './components/User/details/details.component';
import { InscriptionComponent } from './components/User/inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/User/info/info.component';
import { PipeDescriPipe } from './Pipe/pipe-descri.pipe';
import { PipeCurrencyTnPipe } from './Pipe/pipe-currency-tn.pipe';
import { ContenairComponent } from './components/Admin/contenair/contenair/contenair.component';
import { ModifierformationComponent } from './components/Admin/modifierformation/modifierformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterComponent,
    AcceuilComponent,
    LoginComponent,
    ActionAdminComponent,
    ConsulterAcComponent,
    AjouterFormationComponent,
    ChangerMDPComponent,
    AjouterFormateurComponent,
    ErrorComponent,
    AcceuilUserComponent,
    DetailsComponent,
    InscriptionComponent,
    InfoComponent,
    PipeDescriPipe,
    PipeCurrencyTnPipe,
    ContenairComponent,
    ModifierformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
