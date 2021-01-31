import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    LessonsComponent,
    HighlightedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
