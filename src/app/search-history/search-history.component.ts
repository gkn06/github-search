import { Component } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss'],
})
export class SearchHistoryComponent {
  searchHistories: any = [];
  ngOnInit(): void {
    const histories = localStorage.getItem('history');
    this.searchHistories = histories ? JSON.parse(histories) : [];
    console.log(this.searchHistories);
  }

  clear() {
    this.searchHistories = [];
    localStorage.setItem('history', JSON.stringify(this.searchHistories));
  }
}
