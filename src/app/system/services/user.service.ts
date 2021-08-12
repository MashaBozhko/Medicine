import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createOne(email: string, password: string, fio: string, sex: number, birthday: any, live_place: string, snils: string): Observable<Object> {
    console.log('http://192.168.1.92:8000/registration?email=' + email + '&password=' + password + '&fio=' + fio + '&birthday=' + birthday + '&live_place=' + live_place + '&snils=' + snils + '&sex=' + sex);
    return this.http.get<Object>('http://192.168.1.92:8000/registration?email=' + email + '&password=' + password + '&fio=' + fio + '&birthday=' + birthday + '&live_place=' + live_place + '&snils=' + snils + '&sex=' + sex)
  }

  login(log: string, pas: string){
    return this.http.get<Object>('http://192.168.1.92:8000/login?log=' + log + '&pas=' + pas);
  }
  logout(){
    localStorage.removeItem('fio')
    localStorage.removeItem('id')
    location.reload()
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('fio') === null ? false:true; 
  }

  // find(): Observable<User[]> {

  //   return this.http.get<User[]>('http://192.168.1.92:8000/users');
  // }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://192.168.1.92:8000/registration', user);
  }


  // updateOne(user: User) : Observable<User> {
  //   return this.http.put<User>('http://192.168.1.92:8000/users/'+ user.id, user);
  // }  



}
