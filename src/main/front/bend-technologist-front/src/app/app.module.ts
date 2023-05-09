import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialsComponent} from './materials/materials.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialNewModalComponent} from './materials/material-new-modal/material-new-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialEditModalComponent } from './materials/material-edit-modal/material-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialNewModalComponent,
    MaterialEditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
