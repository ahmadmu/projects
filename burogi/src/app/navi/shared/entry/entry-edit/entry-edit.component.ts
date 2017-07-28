import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { DataStorageService } from '../../../data-storage.service';
import { Entry } from '../entry.model';
@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.scss']
})
export class EntryEditComponent implements OnInit, OnDestroy {
  @ViewChild('e') form: NgForm;
  @Output() entryCreated = new EventEmitter<boolean>();
  editSub: Subscription;
  editMode = false;
  editIndex: number;
  entry: Entry;

  constructor(private dss: DataStorageService) { }

  ngOnInit() {
    this.editSub = this.dss.startedEditing.subscribe(
      (index: number) => {
        this.editIndex = index;
        this.editMode = true;
        this.entry = this.dss.getGeneralEntry(index);
        console.log(this.form);
        this.form.setValue({
          title: this.entry.title,
          image: this.entry.image,
          desc: this.entry.desc
        })
      }
    );
  }

  ngOnDestroy() {
    this.editSub.unsubscribe();
  }

  onAddEntry(form: NgForm) {
    const value = form.value;
    const newEntry = new Entry(value.title, value.image, value.desc);
    this.dss.addGeneralEntry(newEntry);
    this.entryCreated.emit();
  }
}
