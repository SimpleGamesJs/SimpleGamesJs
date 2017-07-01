import { Routes } from '@angular/router';

import { MainComponent } from './routes/main/main.component';
import { GameComponent } from './routes/game/game.component';
import { GamesComponent } from './routes/games/games.component';
import { Page404Component } from './routes/page404/page404.component';
import { HeaderComponent } from './elements/header/header.component';

export const appRoutes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    data: { title: 'Main' } 
  },
  { 
    path: 'game', 
    component: GameComponent,
    data: { title: 'Game' } 
  },
  { 
    path: 'games', 
    component: GamesComponent,
    data: { title: 'Games' } 
  },
  { 
    path: '**', 
    component: Page404Component,
	  data: { title: '404' } 
  }
];