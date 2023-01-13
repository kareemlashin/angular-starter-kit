import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  condition:any=true;
  ngOnInit(): void {
    setInterval(() => {
      // this.condition=!this.condition;
    }, 10)
    
  }
}
