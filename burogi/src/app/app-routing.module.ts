import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './navi/general/general.component';
import { BooksComponent } from './navi/books/books.component';
import { EntertainmentComponent } from './navi/entertainment/entertainment.component';
import { GamesComponent } from './navi/games/games.component';
import { HistoryComponent } from './navi/history/history.component';
import { LifeComponent } from './navi/life/life.component';

const appRoutes: Routes = [
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}