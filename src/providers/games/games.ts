import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {
  games = [{
    name: 'Zelda Breath of the Wild',
    platform: ['Nintendo Switch']
  },
  {
    name: 'Fortnite',
    platform: ['Nintendo Switch', 'PC', 'Xbox One']
  }
  ];

  constructor() {}
  insert(game) {
    this.games.push(game);
  }
  update(game, index) {
    this.games[index] = game;
  }
}