import { IDesigns } from '../material-didatico/design';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MaterialService{

  private readonly API = "https://api.trakto.io/document?total_per_page=10&%22updated_between_start%22=%22%22"
  private readonly APIAll= "https://api.trakto.io/document?total_per_page=60&order_by=title&order_orientation=desc&'total_per_page'='50'"

  constructor( private http: HttpClient,
    private router: Router
    ){}

  listDesigns(){
    return this.http.get<IDesigns[]>(this.API, {observe:'response'})
  }

  listAllDesigns(){
    return this.http.get<IDesigns[]>(this.APIAll, {observe:'response'})
   }


}
