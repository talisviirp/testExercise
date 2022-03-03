import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './Components/test-form/test-form.component';
import { CommonErrorDisplayComponent } from './Components/common-error-display/common-error-display.component';
import { InfoMessageComponent } from './Components/info-message/info-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CommonErrorDisplayComponent,
    InfoMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
