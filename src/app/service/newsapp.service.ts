import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsappService {
  constructor(private http: HttpClient) {}

  api_key = '';
  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key
    );
  }
  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key
    );
  }
  getArticlesByID(source: String) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
