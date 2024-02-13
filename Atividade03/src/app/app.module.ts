import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SalvarComponent } from './components/salvar/salvar.component';
import { LerObjComponent } from './components/ler-obj/ler-obj.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CanvasBoxComponent,
    SalvarComponent,
    LerObjComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
