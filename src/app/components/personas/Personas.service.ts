import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class personaService {

  constructor(private http: HttpClient) { }

  get(id?: any): Observable<any> {
    if (id) {
      return this.http.get(`/personas/${id}`)
    }
    else {
      return this.http.get('/personas' + location.search)
    }
  }

  create(data?: any): Observable<any> {
    if (data) {
      return this.http.post('/personas', data)
    }
    else {
      return this.http.get('/personas/create')
    }
  }

  edit(id: any, data?: any): Observable<any> {
    if (data) {
      return this.http.put(`/personas/${id}`, data)
    }
    else {
      return this.http.get(`/personas/${id}`)
    }
  }

  delete(id: any, data?: any): Observable<any> {
    if (data) {
      return this.http.delete(`/personas/${id}`)
    }
    else {
      return this.http.get(`/personas/${id}`)
    }
  }
}