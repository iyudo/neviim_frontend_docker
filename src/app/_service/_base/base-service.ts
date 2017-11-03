import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs';

export abstract class BaseService {

  apiUrl = environment.apiUrl
  
  constructor(private http: Http, path: string,) {
    path = path.slice(-1) == '/' ? path : path.concat('/')
    this.apiUrl += path
  }

  loadAll() {
    let headers = new Headers({ 'Content-Type': 'application/json'  })
    let options = new RequestOptions({ headers: headers })
    return this.http.get(this.apiUrl.concat('list/'), options)
      .map(res => res.json())
      // .catch(this.handleError);
  }

  save(
    objectName: string, 
    object: object
  ) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl.concat('add/'),
    { objectName : object },
    // object,
    options)
    // return this.http.post(this.url.concat('add/'), JSON.stringify(object || null), options)
      // .map(res => res.json())
      // .catch(this.handleError);
  }

  delete(id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.http.delete(this.apiUrl.concat('delete/') + id , options)
  }

}