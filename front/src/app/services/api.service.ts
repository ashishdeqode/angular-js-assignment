import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

interface serverResponse {
  statusCode: number;
  data: Array<any>;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = environment;

  constructor(
    private http: HttpClient
  ) { }

  searchGitProject(queryParams: any) {
    return this.http.get(`${this.env.apiBaseUrl}/github/search_repo`, { params: queryParams })
      .pipe(map(response => response as serverResponse));
  }

  searchGitUser(queryParams: any) {
    return this.http.get(`${this.env.apiBaseUrl}/github/search_user`, { params: queryParams })
      .pipe(map(response => response as serverResponse));
  }
}
