import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations:[
  AppComponent,
  NodeComponent
  ],
  imports: [BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule
    
  ],
 
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }


