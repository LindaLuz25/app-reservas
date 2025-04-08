import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
    private apiUrl = 'https://restcountries.com/v3.1/all';
    constructor(private http:HttpClient) { }

    getCountries() {
        return this.http.get<any[]>(this.apiUrl).pipe(
          map(countries => countries.slice(0, 9)) 
        );
      }
}