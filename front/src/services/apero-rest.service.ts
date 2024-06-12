import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AperoRestService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  messageApero = () => this.httpClient.get("/api/est-ce-que-c-est-l-heure-de-l-apero", {responseType: 'text'});

}
