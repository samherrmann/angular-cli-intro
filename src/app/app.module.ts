import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EmphasizeDirective } from './emphasize.directive';
import { TruncatePipe } from './truncate.pipe';
import { LoggerService } from "./logger.service";
import { GithubService } from "./github.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmphasizeDirective,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoggerService,
    GithubService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
