import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
// import { MaterialModule } from './material/material.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule,MatFormFieldModule,MatInputModule, 
  MatSidenavModule, MatListModule, MatIconModule,MatToolbarModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigComponent } from './navig/navig.component';
import { HomeComponent } from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    NavigComponent,
    HomeComponent,
    AddDataComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  //  MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
