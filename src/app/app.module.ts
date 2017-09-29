import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatSnackBarModule,MatProgressBarModule, MatCardModule, MatTabsModule, MdButtonModule, MdCheckboxModule, MatToolbarModule, MatSidenavModule, MatMenuModule} from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
