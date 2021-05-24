import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../modelos/phone';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  private url = 'http://localhost:300/phones'
  public phoneDetail:Phone = new Phone(0,"","","","",0,"",0,"",0)
  public phones:Phone[] = []

  constructor(private http: HttpClient) { }
  
  getPhones(){
    return this.http.get(this.url + "/")
  }
  postPhones(createdPhone:Phone){
  return this.http.post(this.url, createdPhone )
  }
  putPhone(modifiedPhone:Phone){
    return this.http.put(this.url,modifiedPhone)
  }
  delPhone(id:number){
    return this.http.delete(this.url + '?id=' + id)
  }
}
