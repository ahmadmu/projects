import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Entry } from './shared/entry/entry.model';
import { Favorite } from './shared/favorites/favorite.model';

@Injectable()
export class DataStorageService {
  startedEditing = new Subject<number>();
  gEntriesChanged = new Subject<Entry[]>();
  gFavoritesChanged = new Subject<Favorite[]>();
  gInfoChanged = new Subject<string>();

  private gEntries: Entry[] = [
    new Entry('Welcome to my General Blog',
              'http://imgur.com/9r3ZUYA.jpg',
              'Welcome to my first blog, hope you have a good time'),
    new Entry('Welcome to my 2nd GBlog',
              'http://imgur.com/9r3ZUYA.jpg',
              'Welcome to my first blog, hope you have a good time'),
  ];

  private gFavorites: Favorite[] = [
    new Favorite('Dance Dance Dance',
                'http://i.imgur.com/LHNSRUX.jpg',
                'Haruki Murakami'
    ),
    new Favorite('Wind-up Bird Chronicles',
                'http://i.imgur.com/GVA7O6P.jpg',
                'Haruki Murakami'
    ),
  ]

  private infoGeneral = 'This is the well info text box, where all the info related to the section are presented';

  constructor() { }

  getGeneralEntries() {
    return this.gEntries.slice();
  }

  getGeneralEntry(i: number) {
    return this.gEntries[i];
  }
  getGeneralFavorites() {
    return this.gFavorites.slice();
  }

  getInfoGeneral() {
    return this.infoGeneral;
  }

  addGeneralEntry(entry: Entry) {
    this.gEntries.push(entry);
    this.gEntriesChanged.next(this.gEntries.slice());
  }

  addGeneralFavorite(fav: Favorite) {
    this.gFavorites.push(fav);
    this.gFavoritesChanged.next(this.gFavorites.slice());
  }

  setGeneralInfo(info: string) {
    this.infoGeneral = info;
  }

  deleteGeneralFavorite(e: number) {
    this.gFavorites.splice(e, 1);
    this.gFavoritesChanged.next(this.gFavorites.slice());
  }

  deleteGeneralEntry(e: number) {
    this.gEntries.splice(e, 1);
    this.gEntriesChanged.next(this.gEntries.slice());
  }

}
