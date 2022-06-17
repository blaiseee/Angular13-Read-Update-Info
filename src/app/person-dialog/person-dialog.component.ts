import { Component, Inject, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persons } from '../home/home.component';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {

  @Input() person?: Persons;

  constructor() 
  { 
  }


  ngOnInit(): void 
  {
  }
}
