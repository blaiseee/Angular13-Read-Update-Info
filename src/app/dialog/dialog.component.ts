import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlHandlingStrategy } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  contactForm !: FormGroup;

  selectedFile: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void 
  {
    this.contactForm = this.formBuilder.group
    ({
      profile_picture: ["https://source.unsplash.com/50x50/?product"],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthMonth: ['', Validators.required],
      interest: ['', Validators.required]
    })
  }

  addData()
  {
    if (this.contactForm.valid)
    {
      this.apiService.postData(this.contactForm.value).subscribe
      ({
        next: (res) => 
        {
          alert("Info added successfully");
        },
        error: () => 
        {
          alert("Error while adding the info");
        }
      });
    }
  }
}
