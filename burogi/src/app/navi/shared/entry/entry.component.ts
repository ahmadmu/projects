import { Component, OnInit, Input } from '@angular/core';

import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() list: {title: string, image: string, desc: string}[];
  editMode = false;

  constructor(private dss: DataStorageService) { }

  ngOnInit() {

  }

  onEdit(i) {
    console.log(i);
    this.dss.startedEditing.next(i);
    this.editMode = true;
  }

  onAdd() {
    this.editMode = true;
  }

  onDelete(i: number) {
    this.dss.deleteGeneralEntry(i);
  }

  changeEdit() {
    this.editMode = false;
  }
}
