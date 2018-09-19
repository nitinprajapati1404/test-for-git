import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatSidenavModule,MatListModule,MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatSidenavModule,MatListModule,MatSelectModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
