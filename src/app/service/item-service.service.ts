import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from 'src/models/Inventory';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

constructor(private httpClient: HttpClient) { }
  
 baseUrl ="http://localhost:8080/list"

 public addNewItem(item:Inventory, description:string): Observable<Inventory>{
  
  return this.httpClient.post<Inventory>(this.baseUrl +"/addNewItem/"+description,item,  {  responseType: 'text' as 'json' }); 
 }
 public readDetails(id:number): Observable<string>{
  return this.httpClient.get<string>(this.baseUrl +"/details/"+id,
  {  responseType: 'text' as 'json' });
 }
 public withdrawal(id:number): Observable<number>{
  return this.httpClient.get<number>(this.baseUrl +"/withdrawal/"+id,
  {  responseType: 'text' as 'json' });
 }

 public deposite(id:number): Observable<number>{
  return this.httpClient.get<number>(this.baseUrl +"/deposite/"+id,
  {  responseType: 'text' as 'json' });
}

public take(id:number): Observable<number>{
  return this.httpClient.get<number>(this.baseUrl +"/take/"+id,
  {  responseType: 'text' as 'json' });
}
public put(id:number): Observable<number>{
  return this.httpClient.get<number>(this.baseUrl +"/add/"+id,
  {  responseType: 'text' as 'json' });
}

public delete(id:number): Observable<string>{
  return this.httpClient.delete<string>(this.baseUrl +"/delete/"+id,
  {  responseType: 'text' as 'json' });
}
public getItem(id:number): Observable<Inventory>{
  return this.httpClient.get<Inventory>(this.baseUrl +"/getItem/"+id,
  {  responseType: 'text' as 'json' });
}
}
