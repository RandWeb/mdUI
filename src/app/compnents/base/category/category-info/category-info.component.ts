import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css']
})
export class CategoryInfoComponent implements OnInit{
  // @ts-ignore
  formGroup: FormGroup;
  titleAlert: string = 'این ورودی اجباری می باشد';
  post: any = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      'categoryName': [null, Validators.required],
      'description': [null, [Validators.required,Validators.minLength(5)]]
    });
  }
  get categoryName() {
    return this.formGroup.get('categoryName') as FormControl
  }
  get description() {
    return this.formGroup.get('description') as FormControl
  }
  onSubmit(post:any) {
    this.post = post;
  }

}
