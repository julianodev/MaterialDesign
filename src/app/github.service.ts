import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class GithubService {

  constructor(private http: Http) { 
    console.log('providers');
  }

  getUsers(): Observable<any> {
    
            const urlBase = 'https://api.github.com';
            return this.http.get(`${urlBase}/users`)
                .map((response: Response) => {
                    return response.json() as any;
                });
        }
}
