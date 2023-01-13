import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../shared/base/base/base.component';
import { HttpClient } from '@angular/common/http';
import { IndexVM } from './index.vm';
import { ngAutoCancelable } from 'ng-auto-cancelable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers:[IndexVM]
})
export class IndexComponent extends BaseComponent implements OnInit{


  constructor(private httpClient: HttpClient,private _IndexVM:IndexVM) { 
    super()
  }

  ngOnInit(): void {
    setInterval(() => {
      // this.fetchData();
    }, 100)
  }

  @ngAutoCancelable()
  fetchData() {
    return this.httpClient
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }


}
