import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NaviRoutingModule } from './navi-routing.module';

import { DataStorageService } from './data-storage.service';

import { StartComponent } from './start/start.component';
import { GeneralComponent } from './general/general.component';
import { LifeComponent } from './life/life.component';
import { GamesComponent } from './games/games.component';
import { BooksComponent } from './books/books.component';
import { HistoryComponent } from './history/history.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { InfoComponent } from './shared/info/info.component';
import { EntryComponent } from './shared/entry/entry.component';
import { EntryEditComponent } from './shared/entry/entry-edit/entry-edit.component';
import { FavoritesAddComponent } from './shared/favorites/favorites-add/favorites-add.component';
import { InfoEditComponent } from './shared/info/info-edit/info-edit.component';

@NgModule({
  declarations: [
    GeneralComponent,
    LifeComponent,
    GamesComponent,
    BooksComponent,
    HistoryComponent,
    EntertainmentComponent,
    StartComponent,
    FavoritesComponent,
    InfoComponent,
    EntryComponent,
    EntryEditComponent,
    FavoritesAddComponent,
    InfoEditComponent
  ],
  imports: [
    CommonModule,
    NaviRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [DataStorageService],
})
export class NaviModule { }
