import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { GeneralComponent } from './general/general.component';
import { BooksComponent } from './books/books.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GamesComponent } from './games/games.component';
import { HistoryComponent } from './history/history.component';
import { LifeComponent } from './life/life.component';

const appRoutes: Routes = [
    { path: '', component: StartComponent },
    { path: 'general', component: GeneralComponent},
    { path: 'general', component: GeneralComponent},
    { path: 'books', component: BooksComponent},
    { path: 'entertainment', component: EntertainmentComponent},
    { path: 'games', component: GamesComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'life', component: LifeComponent},
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class NaviRoutingModule {

}