import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private ACTION_URL        = environment.url + "action/";
  private REGISTRATION_URL  = environment.url + "registration/"
  private sharedByMeClicked = new BehaviorSubject<any>(null);
  private SharedToMeClicked = new BehaviorSubject<any>(null);
  private goHomeClicked     = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) { }

  setSharedByMeClicked(val: number){
    this.sharedByMeClicked.next(val);
  }

  setGoHomeClicked(val: number){
    this.goHomeClicked.next(val);
  }

  setSharedToMeClicked(val: number){
    this.SharedToMeClicked.next(val);
  }

  getSharedByMeClicked(): Observable<any>{
    return this.sharedByMeClicked.asObservable();
  }

  getGoHomeClicked(): Observable<any>{
    return this.goHomeClicked.asObservable();
  }

  getSharedToMeClicked(): Observable<any>{
    return this.SharedToMeClicked.asObservable();
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get(this.REGISTRATION_URL + "getAllUser");
  }

  uplaodfile(Obj: any): Observable<any>{
    console.log(Obj)
    return this.httpClient.post(this.ACTION_URL+"saveImage", Obj);
  }

  getUserData(id: any): Observable<any> {
    return this.httpClient.get(this.ACTION_URL + "getUserData/" + id);
  }

  shareImages(obj: any): Observable<any> {
    return this.httpClient.post(this.ACTION_URL + "share/", obj);
  }

  sharedByMe(id: any): Observable<any> {
    return this.httpClient.get(this.ACTION_URL + "imageShared/" + id + '/ME');
  }

  sharedToMe(id: any): Observable<any> {
    return this.httpClient.get(this.ACTION_URL + "imageShared/" + id + '/TO');
  }

  register(reg: any): Observable<any> {
    return this.httpClient.post(this.REGISTRATION_URL + "save", reg);
  }

  login(obj: any): Observable<any> {
    return this.httpClient.post(this.REGISTRATION_URL + "login", obj);
  }
}
