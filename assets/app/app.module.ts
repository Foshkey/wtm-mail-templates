import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CharacterService } from './common/character.service';
import { ErrorService } from './common/error.service';
import { KeysPipe } from './common/keys.pipe';
import { OpenMailService } from './common/open-mail.service';
import { TemplateService } from './common/template.service';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';
import { SelectorComponent } from './selector/selector.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    LandingComponent,
    TopBarComponent,
    SelectorComponent,
    KeysPipe
  ],
  providers: [
    CharacterService,
    ErrorService,
    OpenMailService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
