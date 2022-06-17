import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';

declare var window: any;

export interface Persons
{
  profile_picture: string,
  firstName: string,
  middleName: string,
  lastName: string,
  email: string,
  birthMonth: string,
  birthDay: string,
  birthYear: string,
  interest: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "ang13-bootstrap5-modal-demo";
  formModal: any;

  persons: Persons[] = [];

  selectedPerson!: Persons;

  totalLength: any;
  page: number = 1;

  pageSlice = this.persons.slice(0, 5);
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void 
  {
    this.formModal = new window.bootstrap.Modal
    (
      document.getElementById("exampleModal")
    );
    this.apiService.getData().pipe(takeUntil(this.destroy$)).subscribe((datas: any) => {
      this.persons = datas;
      this.totalLength = datas.length;
      // console.log(datas);
    })

    console.log(this.selectedPerson);
  }

  ngOnDestroy()
  {
    this.destroy$.next(true);
    this.destroy$.unsubscribe(); //Unsubscribe from the subject
  }

  // Add Dialog
  openDialog()
  {
    this.dialog.open(DialogComponent, 
    {
      width: '30%',
      height: '65%'
    })
  }

  openModal(person: Persons)
  {
    this.formModal.show();
    this.selectedPerson = person;
  }

  closeModal()
  {
    this.formModal.hide();
  }
}