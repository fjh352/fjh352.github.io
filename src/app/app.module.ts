import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {NavComponent} from "./nav/nav.component";

@NgModule({
  declarations: [AppComponent,NavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash: false}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }