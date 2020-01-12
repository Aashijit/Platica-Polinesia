import { Codes } from './../../Utils/Codes';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';

@Injectable()
export class HttpProvider {

  constructor(private http: Http,public codes : Codes) {
  }

  /**
   * 
   * @param data  the json data
   * @param apiName the api name
   */
  callApi(data,apiName) {
    return new Promise(resolve => {
            let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //data['action'] = action;
        //data['Auth_Token'] = (tokenId == null) ? 1 : tokenId;
        //data['U_Type'] = 'D';
      console.log(JSON.stringify(data));
      this.http.post(this.codes.API_ENDPOINT+apiName, JSON.stringify(data)
        , {headers: headers}).map(res => res.json())
        .subscribe((data:any) => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            resolve({status: this.codes.API_ERROR});
          }
        );
      
    });
  }


  isNullOrEmpty(str) {
    return typeof str === 'undefined' || str === null || (typeof str === 'string' && str.length <= 0);
  }

  convertToArray(object) {
    if (this.isArray(object))
      return object;
    else
      return [object];
  }

  isArray(object) {

    if (typeof object === 'undefined')
      return false;
    return Object.prototype.toString.call(object).slice(8, -1) === 'Array';
  }


}
