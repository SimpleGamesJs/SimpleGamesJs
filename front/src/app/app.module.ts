import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { GameComponent } from './routes/game/game.component';
import { GamesComponent } from './routes/games/games.component';
import { Page404Component } from './routes/page404/page404.component';
import { HeaderComponent } from './elements/header/header.component';
import { SidebarComponent } from './routes/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameComponent,
    GamesComponent,
    Page404Component,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true 
      }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
