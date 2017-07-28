import { Component, OnInit, Input } from '@angular/core';

import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() list;

  constructor(private dss: DataStorageService) { }

  ngOnInit() {
  }

  onDelete(i) {
    this.dss.deleteGeneralFavorite(i);
  }
}
