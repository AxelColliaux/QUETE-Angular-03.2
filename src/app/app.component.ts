import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03Bis-Directives';
  showMovies:boolean = true;

  displayMovie(){
    this.showMovies = !this.showMovies;
  }
}
