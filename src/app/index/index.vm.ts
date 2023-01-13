import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ngAutoCancelable } from 'ng-auto-cancelable';

@Injectable({
    providedIn: 'root'
  })
export class IndexVM {
    data:any;
    public gets(){
        this.fetchData();
    }
    constructor(private httpClient: HttpClient) { 
      }
    
  
    @ngAutoCancelable()
    fetchData() {
      return this.httpClient
        .get(
          "https://jsonplaceholder.typicode.com/posts"
        )
        .subscribe(
          (res) => {
            this.data=res;
            console.log(res);
          }
        );
    }
}