import {Injectable} from '@angular/core';
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  isAuthenticate: boolean = localStorage.getItem('token') ? true : false;
  readonly apiUrl: string = "https://apitester.ir/api/Users/authenticate";

  constructor(private http: HttpClient) {
  }

  login(model: { userName: string, password: string }): Observable<any> {
    const apiUrl = `${this.apiUrl}?userName=${model.userName}&password=${model.password}`
    return this.http.get<any>(apiUrl);
  }
}
