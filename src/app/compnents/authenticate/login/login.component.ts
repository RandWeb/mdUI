import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "../../../services/authenticate.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // @ts-ignore
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,private authenticateService:AuthenticateService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      'userName': [null, Validators.required],
      'password': [null, [Validators.required,Validators.minLength(4)]]
    });
  }
  get userName() {
    return this.formGroup.get('userName') as FormControl
  }
  get password() {
    return this.formGroup.get('password') as FormControl
  }
  onSubmit(post:any) {
    this.authenticateService.login(post).subscribe(result=>{
      localStorage.setItem('token',result.token)
      localStorage.setItem('userInfo',JSON.stringify(result));
      //window.location.reload();

    });
  }

}
