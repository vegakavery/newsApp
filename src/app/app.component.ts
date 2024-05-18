import { Component } from '@angular/core';
import { NewsappService } from './service/newsapp.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mArticles$!: Observable<any>;
  mSources$: Observable<any> | undefined;
  mode = new FormControl('push' as MatDrawerMode);

  constructor(private newsapi: NewsappService) {
  }

 

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.mArticles$ = this.newsapi.initArticles();
    this.mSources$ = this.newsapi.initSources();
  }


  // function to search for articles based on a news source (selected from UI mat-menu)
  searchArticles(source: string) {
    this.mArticles$ = this.newsapi.getArticlesByID(source);
  }
  
}
