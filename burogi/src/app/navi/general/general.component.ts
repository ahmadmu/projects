import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Entry } from '../shared/entry/entry.model';
import { Favorite } from '../shared/favorites/favorite.model';

import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {
  entries: Entry[];
  favorites: Favorite[];
  info: string;
  entrySub: Subscription;
  favSub: Subscription;
  infoSub: Subscription;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.entries = this.dataStorageService.getGeneralEntries();
    this.favorites = this.dataStorageService.getGeneralFavorites();
    this.entrySub = this.dataStorageService.gEntriesChanged.subscribe(
      (entry: Entry[]) => { this.entries = entry; }
    )
    this.favSub = this.dataStorageService.gFavoritesChanged.subscribe(
      (fav: Favorite[]) => { this.favorites = fav; }
    )
    this.info = this.dataStorageService.getInfoGeneral();
    this.infoSub = this.dataStorageService.gInfoChanged.subscribe(
      (info: string) => { this.info = info; }
    )
  }

  ngOnDestroy() {
    this.entrySub.unsubscribe();
    this.favSub.unsubscribe();
    this.infoSub.unsubscribe();
  }

}
