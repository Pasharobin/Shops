import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getCoordinates(address: string): Observable<any> {
    return this.httpClient.get('https://geocode-maps.yandex.ru/1.x/?apikey=339ee68a-2147-497f-aefa-906955320db9&format=json&geocode=' + address + '&results=1')
  }
}
