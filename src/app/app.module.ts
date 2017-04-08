import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EmphasizeDirective } from './emphasize.directive';
import { TruncatePipe } from './truncate.pipe';
import { LoggerService } from "./logger.service";
import { GithubService } from "./github.service";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmphasizeDirective,
    TruncatePipe,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoggerService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
