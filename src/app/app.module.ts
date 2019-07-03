import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { JogoComponent } from './jogo/jogo.component';
import { PortaComponent } from './porta/porta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInicialComponent,
    JogoComponent,
    PortaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
